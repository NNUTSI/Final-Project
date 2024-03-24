"use strict";

const container = document.querySelector(".container");

// Change
document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

// wether

const API_KEY = "b68cab2cdaf6c3100e58980ee1106c00";
const CITY_NAME = "Tbilisi";

axios
  .get(
    `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
  )
  .then((response) => {
    const weatherData = response.data;
    const weatherElement = document.getElementById("weather-data");
    const temperatureInCelsius = (weatherData.main.temp - 273.15).toFixed();
    weatherElement.textContent = ` ${CITY_NAME} ${temperatureInCelsius}°C`;

    // Update the src of the weatherIconElement with the weather icon
    const icon = weatherData.weather[0].icon;
    const weatherIconElement = document.getElementById("weather-icon");
    weatherIconElement.src = `http://openweathermap.org/img/w/${icon}.png`;
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });
