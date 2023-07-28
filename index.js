let curCity="new york";
let units ="metric";


let city=document.querySelector(".weather_city");
let datetime=document.querySelector(".weather_datetime");
let weather_forecast=document.querySelector(".weather_forecast");
let weather_temp=document.querySelector(".weather_temp");
let weather_minmax=document.querySelector(".weather_minmax");
let weather_icon=document.querySelector(".weather_icon");
let weather_realfeel=document.querySelector(".weather_realfeel");
let weather_humidity=document.querySelector(".weather_humidity");
let weather_wind=document.querySelector(".weather_wind");
let weather_pressure=document.querySelector(".weather_pressure");


document.querySelector(".weather_search").addEventListener('submit', e => {
    let search = document.querySelector(".weather_searchform");
    
    console.log(search);
    e.preventDefault();
    
    curCity = search.value;

    
    
    getWeather();
    
    search.value = ""
})




function getWeather(){
    
   


fetch(`http://api.weatherapi.com/v1/current.json?key=b8480f85f5d448d699233616232207&q=${curCity}&units=${units}`).then(res=>res.json()).then(data=>{

    console.log(data)

    city.innerHTML=`${data.location.name}, ${(data.location.country)}`
 
    datetime.innerHTML=data.location.localtime;

    weather_forecast.innerHTML=`<p>${data.current.condition.text} </p>`;

    weather_temp.innerHTML=`${data.current.temp_c} &#176`;

    weather_minmax.innerHTML=`UV Index : ${data.current.uv}  <br>  Wind Degree : ${data.current.wind_degree}`;

    weather_icon.innerHTML=`<img src="${data.current.condition.icon}">`;

    weather_realfeel.innerHTML=`${data.current.feelslike_c} &#176`;

    weather_humidity.innerHTML=`${data.current.humidity} &#37`;

    weather_wind.innerHTML=`${data.current.wind_kph} kmp`;

    weather_pressure.innerHTML=`${data.current.pressure_in} hPa`;


})
}

document.body.addEventListener('load',getWeather())