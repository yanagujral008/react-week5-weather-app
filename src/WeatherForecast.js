import React, { useState, useEffect } from"react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);


    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
          <div className="WeatherForecast">
            <div className="row">
              {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
        } else {
            let apiKey="3c0eca18f3a2743b8tdo8c93b0a6483f";
            let longitude = props.coordinates.longitude;
            let latitude = props.coordinates.latitude;
            let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
                
            axios.get(apiUrl).then(handleResponse);
        
            return null; 
        }
    }  