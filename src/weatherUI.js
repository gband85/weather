import './fontawesome.min.css'
import './solid.min.css'
const weatherUI = () => {
    const container = document.createElement("div");
   container.className="container";
   container.innerHTML=`
 <div class="location-search">
 <div class="search-box">
 <input type="text" id="location-input">
 <button class="bt" type="button" id="search-btn"><i class="fa-solid fa-location-crosshairs fa-2x"></i></button>
 </div>
 
<ul id="test"></ul>
 
 </div>
        
         <div class="weather">


             

             
               <h3 id="location" class="card-title"></h3>
               <h1 id="temp"><sup>&#x2109</sup></h1>
               <h1 id="description"></h1>
               <img src="" alt="" id="weather-icon">
               
               

         </div>
         
        
    
   `
   return container;
   }
   const navbar=()=>{
     const nav=document.createElement("nav");
     nav.className="navbar"
     nav.innerHTML=`

 
     <a class="navbar-brand" href="">Your Local Weather</a>
     <div class="btn-group">
     <button id="celsius" class="btn btn-dark float-md-right">&#x2103</button>
     <button id="fahrenheit" class="btn btn-light float-md-right">&#x2109</button>
     </div>
`
return nav;
   }
   export { weatherUI,navbar }