const weatherUI = () => {
    const container = document.createElement("div");
   container.className="container";
   container.innerHTML=`
   <div class="row">
         <div class="col-md-6 offset-md-3 top-buffer">
           
        
         <div class="card text-center">
   <div class="card-header" id="button-header">
     <button id="celsius" class="btn btn-light float-md-right">&#x2103</button>
     <button id="fahrenheit" class="btn btn-dark float-md-right">&#x2109</button>
             
           </div>
   
           <div class="card-body" id="weather-card"> 
             
               <h3 id="location" class="card-title"></h3>
               <h1 id="temp"><sup>&#x2109</sup></h1>
               <h1 id="description"></h1>
               <img src="" alt="" id="weather-icon">
               
               
           </div>
         </div>
         </div>
        
    </div>
   `
   return container;
   }
   export { weatherUI }