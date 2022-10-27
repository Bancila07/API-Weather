const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "d46142d899795b9fa6be60a4032a3e5a"
}
const cities =  {
    "618426": "Chisinau",
    "625144": "Minsk",
    "456172": "Riga",
    "690791": "Ukraine"
}


function  getWeather(){
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather =>{
            return weather.json();
        }).then(showWeather);
}
function  showWeather(data){
    const {icon} = data.weather[0];
    console.log(data);
    document.querySelector('.temp').innerHTML = data.main.temp + '&deg';
    document.querySelector('.description').innerHTML = data.weather[0]['description'];
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    document.querySelector('.pressure').innerHTML = data.main.pressure + " mb";
    document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png"
}
getWeather();
document.querySelector('#city').onchange = getWeather;
