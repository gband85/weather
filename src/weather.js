

const getWeather = async function(lat,lon) {


 //$appid='49a090f8fd32a555bd97635debc34855';
// $url ='https://api.openweathermap.org/data/2.5/weather?';
var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=49a090f8fd32a555bd97635debc34855`

 const request = await fetch(weatherAPI)
const response = await request.json()

printWeather(response)
}
const getWeatherPlace=async function(place){
  document.querySelector("#test").innerHTML=""
  let weatherAPI=`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=49a090f8fd32a555bd97635debc34855`
  const request=await fetch(weatherAPI);
  const response=await request.json();
let list=document.createElement("ul")
list.className="places-list"
response.forEach(function(el){
let listItem =  document.createElement("li");
listItem.className="place"
let listItemLink=document.createElement("a")
listItemLink.className="place-link"
listItemLink.setAttribute("data-lat",el["lat"])
listItemLink.setAttribute("data-lon", el["lon"])
listItemLink.href="#"
listItemLink.textContent=`${el["name"]}, ${el["country"]}`
listItemLink.addEventListener("click",function(e) {
  document.querySelector("#temp").textContent=""
    getWeather(parseFloat(e.target.attributes["data-lat"].nodeValue),parseFloat(e.target.attributes["data-lon"].nodeValue))
   document.querySelector("#test").innerHTML=""
 })

listItem.appendChild(listItemLink)
list.appendChild(listItem)
 
})
document.querySelector("#test").appendChild(list)
}
const printWeather=(weather)=>{

let location_ = document.getElementById("location");
var temp = document.getElementById("temp");
var description = document.getElementById("description");
var weatherIcon = document.getElementById("weather-icon");
var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");

var tempf=Math.floor(9/5*(weather.main.temp - 273.15)+32);
       var tempc=Math.floor(weather.main.temp - 273.15);
       
       location_.innerHTML = `${weather["name"]}, ${weather["sys"]["country"]}`
       
       temp.prepend(tempf)
       description.innerHTML = weather["weather"][0]["description"]
       weatherIcon.innerHTML = weather["weather"][0]["description"];

       celsius.addEventListener("click", function() {
         temp.innerHTML = tempc + '<sup>&#x2103</sup>';
         
         celsius.classList.add("btn-light");
         celsius.classList.remove("btn-dark")
         
         fahrenheit.classList.add("btn-dark");
         fahrenheit.classList.remove("btn-light")
         
       });

       fahrenheit.addEventListener("click", function() {
        temp.innerHTML = tempf + '<sup>&#x2109</sup>';
         
         celsius.classList.add("btn-dark");
         celsius.classList.remove("btn-light")

         
         fahrenheit.classList.add("btn-light");
         fahrenheit.classList.remove("btn-dark")
         
                   
       });
       var weatherID = weather["weather"][0]["id"];
       switch (true) {
         case weatherID >= 200 && weatherID < 233: //thunderstorm
         weatherIcon.src = "http://openweathermap.org/img/wn/11d@2x.png";
         break;
         case weatherID >= 300 && weatherID <= 321: //drizzle
         weatherIcon.src = "http://openweathermap.org/img/wn/09d@2x.png";
         break
         case weatherID >= 500 && weatherID <= 504: //light rain,moderate rain,heavy intensity rain,very heavy rain,extreme rain
         weatherIcon.src = "http://openweathermap.org/img/wn/10d@2x.png";
         break;
         case weatherID == 511: //freezing rain
         weatherIcon.src = "http://openweathermap.org/img/wn/13d@2x.png";
         break;
         case weatherID >= 520 && weatherID <= 531: //light intensity shower rain,shower rain,heavy intensity shower rain,ragged shower rain
         weatherIcon.src = "http://openweathermap.org/img/wn/09d@2x.png";
         break;
         case weatherID >= 600 && weatherID <=622 : //snow
         weatherIcon.src = "http://openweathermap.org/img/wn/13d@2x.png";
         break;
         case weatherID >= 701 && weatherID <= 781: //Atmosphere
         weatherIcon.src = "http://openweathermap.org/img/wn/50d@2x.png";
         break;
         case weatherID == 800 : //clear sky
         weatherIcon.src = "http://openweathermap.org/img/wn/01d@2x.png";
         break;
         case weatherID == 801: //few clouds
         weatherIcon.src = "http://openweathermap.org/img/wn/02d@2x.png";
         break;
         case weatherID == 802: //scattered clouds
         weatherIcon.src = "http://openweathermap.org/img/wn/03d@2x.png";
         break;
         case weatherID == 803 || weatherID == 804: //broken clouds,overcast clouds
         weatherIcon.src = "http://openweathermap.org/img/wn/04d@2x.png";
         break;         

       }

}

export { getWeather,getWeatherPlace, printWeather }