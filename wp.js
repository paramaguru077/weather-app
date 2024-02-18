const apikey="dcd1b1a8f272f193deee080dd26de784";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
    }else{
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src="images/mist.png";
        }
        document.querySelector(".error").style.display ="none";
    }
    
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})

