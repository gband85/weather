import { weatherUI } from './weatherUI'
import { getWeather } from './weather'
import './style.css'

document.body.appendChild(weatherUI())

   window.onload = () => {       
     navigator.geolocation.getCurrentPosition(getWeather);
     
   };