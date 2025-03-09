const apiKey = "8bc425fee0148c334c446eb056d14914";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        error.classList.remove("hide");
        weather.classList.add("hide");
    } else  {
        const data = await response.json();


    error.classList.add("hide");

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".wind-speed").innerHTML = data.wind.speed + "%";
document.querySelector(".humidity-rate").innerHTML = data.main.humidity + "km/h";

if(data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";

} else if(data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";

} else  if(data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";

} else if(data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
    
} else if(data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
} 

    }

    
}

searchBtn.addEventListener("click" , ()=> {
    weather.classList.remove("hide");
    checkWeather(searchBar.value);
});


