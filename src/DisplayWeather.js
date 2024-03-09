function DisplayValues(response) {
  document.getElementById("Celsius").textContent =
    `Celsius: ${response.current.temp_c}`;
  document.getElementById("Fahrenheit").textContent =
    `Fahrenheit: ${response.current.temp_f}`;
  document.getElementById("Wind SpeedKm").textContent =
    `Wind speed: ${response.current.wind_kph}kph`;
  document.getElementById("Wind SpeedMi").textContent =
    `Wind speed: ${response.current.wind_mph}mph`;
  document.getElementById("Humidity").textContent =
    `Humidity: ${response.current.humidity}`;
}
export default DisplayValues;
