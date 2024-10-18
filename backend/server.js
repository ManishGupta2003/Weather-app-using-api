const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;


app.use(cors());


mongoose
  .connect("mongodb://localhost:27017/Weather")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use(express.json());


const weatherSummarySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  averageTemp: Number,
  maxTemp: Number,
  minTemp: Number,
  dominantCondition: String,
  city: { type: String, required: true }, // Added city field
});

const WeatherSummary = mongoose.model("WeatherSummary", weatherSummarySchema);

// API Key and Cities
const API_KEY = "0defb3694113ab99f82fabcdd089e37a"; // change api key 
const cities = [
  "Delhi",
  "Mumbai",
  "Chennai",
  "Bangalore",
  "Kolkata",
  "Hyderabad",
];

// Convert Kelvin to Celsius
const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

// Function to get weather data for multiple cities
const getWeatherData = async () => {
  const promises = cities.map(async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const { main, weather, dt } = response.data;
      const temperature = kelvinToCelsius(main.temp);
      const dominantCondition = weather[0].main;

      return {
        date: new Date(dt * 1000).toISOString().split("T")[0], // Date format (YYYY-MM-DD)
        averageTemp: temperature,
        maxTemp: kelvinToCelsius(main.temp_max),
        minTemp: kelvinToCelsius(main.temp_min),
        dominantCondition,
        city, // Store city name
      };
    } catch (error) {
      console.error(`Error fetching data for ${city}:`, error.message);
      return null; // Return null if the request fails
    }
  });

  return Promise.all(promises);
};


app.get("/api/weather/update", async (req, res) => {
  try {
    const responses = await getWeatherData();
    console.log("Good API: fetching weather details");

   
    const validResponses = responses.filter((response) => response !== null);
    console.log("Valid responses received");

  
    for (let summary of validResponses) {
      // Check if an entry for this city and date exists
      const existingSummary = await WeatherSummary.findOne({
        date: summary.date,
        city: summary.city,
      });
      if (!existingSummary) {
        await WeatherSummary.create(summary); 
      }
    }

    res.json(validResponses); // Send JSON response
  } catch (error) {
    console.error("Error fetching or saving weather data:", error);
    res.status(500).json({ error: "Error fetching or saving weather data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
