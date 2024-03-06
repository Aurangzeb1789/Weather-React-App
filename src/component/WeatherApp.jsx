import React, { useState } from "react";
import "./WeatherApp.css";
const WeatherApp = () =>
{
    
      const [wicon, setWicon] = useState("./clear.png");

       let api_key = "dd94f859a0e52d6e4767fddf735f04a7";

       const search = async () =>
       {
            let element = document.getElementsByClassName("cityInput");
        
            if(element[0].value === null)
            {
               return 0;
            }

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

            let respone = await fetch(url);
            let data = await respone.json();

            const humidity = document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-rate");
            const temp = document.getElementsByClassName("weather-temp");
            const city = document.getElementsByClassName("weather-Location");

            temp[0].innerText = Math.round(data.main.temp) + "°C";
            city[0].innerText = data.name;
            humidity[0].innerText = data.main.humidity + " %";
            wind[0].innerText = data.wind.speed + " m/s";

             
            element[0].value = "";

   if (data.weather[0].icon ==="01d" || data.weather[0].icon ==="01n")
   {           
          setWicon("./clear.png");
   }
    else if (data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n")
   {
    setWicon("./cloud.png");
   }

   else if (data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n")
   {
    setWicon("./drizzle.png");
   }
   else if (data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n")
   {
    setWicon("./drizzle.png");
   }
   else if (data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n")
   {
    setWicon("./rain.png");
   }
   else if (data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n")
   {
    setWicon("./rain.png");
   }

   else if (data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n")
   {
    setWicon("./snow.png");
   }
          else 
          {
            setWicon("./clear.png");
          }

  }



    return (

         <div>
                    <div className="container">
                         <div className="top-bar">
                            <input type="text" className="cityInput" placeholder="search"/>
                            <div className="search-icon" onClick={()=>search()}>
                                <img src="./search.png" alt=""  className="change"/>
                            </div>
                         </div>
                                   <div className="weather-image">
                                    <img src={wicon} alt="" />
                                   </div>
                                   <div className="weather-temp">24°C</div>
                                   <div className="weather-Location">London</div>
                                   <div className="data-container">
                                      <div className="element">
                                        <img src="./humidity.png" alt="" />
                                        <div className="data">
                                            <div className="humidity-percent">64%</div>
                                            <div className="text">Humidity</div>
                                        </div>
                                      </div>

                                      <div className="element">
                                        <img src="./wind.png" alt="" />
                                        <div className="data">
                                            <div className="wind-rate">18 km/h</div>
                                            <div className="text">Wind Speed</div>
                                        </div>
                                      </div>
                                   </div>
                    </div>
         </div>
    )
}

export default WeatherApp;