import { weatherUI,navbar } from './weatherUI'
import { getCoords,getPlace } from './weather'
import './style.css'

document.body.appendChild(navbar())
document.body.appendChild(weatherUI())
document.querySelector("#location-search").addEventListener("keyup",function(e){
  // console.log(e)
  getCoords(e.target.value)
})


   window.onload = () => {       
    navigator.geolocation.getCurrentPosition(function(position) { 
      getPlace(position.coords.latitude,position.coords.longitude)
    });
  // console.log(navigator.geolocation)
   };