const API_KEY = "enter your api id here";

function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        result.innerHTML = `<p style="color:red">City not found ❌</p>`;
        return;
      }

      result.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡 Temp: ${data.main.temp} °C</p>
        <p>🤔 Feels like: ${data.main.feels_like} °C</p>
        <p>☁ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(() => {
      result.innerHTML = `<p style="color:red">Error fetching data</p>`;
    });
}
