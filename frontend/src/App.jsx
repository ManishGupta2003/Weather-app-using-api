import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("C"); // State to track temperature unit

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/weather/update"
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Error fetching weather data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleTemperatureUnitChange = (event) => {
    setTemperatureUnit(event.target.value);
  };

  const convertTemperature = (temp) => {
    if (temp === null || temp === undefined) return null;

    const numberTemp = Number(temp);
    if (isNaN(numberTemp)) return null;

    return temperatureUnit === "C" ? numberTemp : (numberTemp * 9) / 5 + 32;
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Weather Data</h1>
      <label htmlFor="temperature-unit" className="text-lg font-semibold mb-2">
        Select Temperature Unit:
      </label>
      <select
        id="temperature-unit"
        value={temperatureUnit}
        onChange={handleTemperatureUnitChange}
        className="border border-gray-300 rounded-lg shadow-sm p-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="C">Celsius (°C)</option>
        <option value="F">Fahrenheit (°F)</option>
      </select>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-2 px-4">City</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">
              Average Temp ({temperatureUnit === "C" ? "°C" : "°F"})
            </th>
            <th className="py-2 px-4">
              Max Temp ({temperatureUnit === "C" ? "°C" : "°F"})
            </th>
            <th className="py-2 px-4">
              Min Temp ({temperatureUnit === "C" ? "°C" : "°F"})
            </th>
            <th className="py-2 px-4">Dominant Condition</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((data, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{data.city}</td>
              <td className="py-2 px-4">{data.date}</td>
              <td className="py-2 px-4">
                {convertTemperature(data.averageTemp) !== null
                  ? convertTemperature(data.averageTemp).toFixed(2)
                  : "N/A"}
              </td>
              <td className="py-2 px-4">
                {convertTemperature(data.maxTemp) !== null
                  ? convertTemperature(data.maxTemp).toFixed(2)
                  : "N/A"}
              </td>
              <td className="py-2 px-4">
                {convertTemperature(data.minTemp) !== null
                  ? convertTemperature(data.minTemp).toFixed(2)
                  : "N/A"}
              </td>
              <td className="py-2 px-4">{data.dominantCondition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
