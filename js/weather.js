const locationText = document.querySelector(".js-location");
const API_KEY = "b510fe31776524edce2f07ff3b21ce46";

function geolocationOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.getElementById("weather");
      const weatherText = weather.querySelector("#weather-text");
      const temperature = weather.querySelector("#temperature");
      const city = weather.querySelector("#city");
      const weatherIcon = weather.querySelector("#weather-icon");
      weatherText.innerText = `현재 날씨: ${data.weather[0].main}`;
      temperature.innerText = `현재 기온: ${Math.round(data.main.temp)}도`;
      city.innerText = `현재 장소: ${data.name}`;
      const icon = data.weather[0].icon;
      weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    });
}
function geolocationError() {
  locationText.innerText = "Error";
}

navigator.geolocation.getCurrentPosition(geolocationOk, geolocationError);
