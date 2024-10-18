import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
const [weatherData, setWeatherData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const fetchWeatherData = async () => {
try {
// Fetch the weather data from the backend API
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

if (loading) {
return <div>Loading...</div>;
}

if (error) {
return <div>{error}</div>;
}

return (

<div style={{ textAlign: "center", padding: "20px" }}>
<h1>Weather Data</h1>
<table
style={{ margin: "0 auto", border: "1px solid #ccc", width: "80%" }} >
<thead>
<tr>
<th>City</th>
<th>Date</th>
<th>Average Temperature (°C)</th>
<th>Max Temperature (°C)</th>
<th>Min Temperature (°C)</th>
<th>Dominant Condition</th>
</tr>
</thead>
<tbody>
{weatherData.map((data, index) => (
<tr key={index}>
<td>{data.city}</td>
<td>{data.date}</td>
<td>{data.averageTemp}</td>
<td>{data.maxTemp}</td>
<td>{data.minTemp}</td>
<td>{data.dominantCondition}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}

export default App;
