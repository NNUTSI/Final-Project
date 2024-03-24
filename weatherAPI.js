import axios from "axios";

const API_KEY = "b68cab2cdaf6c3100e58980ee1106c00";

export async function getWeatherData(cityName) {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );
    console.log("data", response)
    return response.data; // Return the weather data if the request is successful

  } catch (error) {
    console.error(error); // Log any errors that occur during the request
  }
}

// / const API_KEY = "b68cab2cdaf6c3100e58980ee1106c00";
// const CITY_NAME = "Tbilisi";

// axios
//   .get(
//     `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
//   )
//   .then((response) => {
//     const weatherData = response.data;
//     const weatherElement = document.getElementById("weather-data");
//     const temperatureInCelsius = (weatherData.main.temp - 273.15).toFixed(2);
//     weatherElement.textContent = ` ${CITY_NAME}: ${temperatureInCelsius}°C`;

//     // Update the src of the weatherIconElement with the weather icon
//     const icon = weatherData.weather[0].icon;
//     const weatherIconElement = document.getElementById("weather-icon");
//     weatherIconElement.src = `http://openweathermap.org/img/w/${icon}.png`;
//   })
//   .catch((error) => {
//     console.error("Error fetching weather data:", error);
//   });
