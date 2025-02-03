import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response){
       console.log(response.data);
       setWeatherData( {
        ready: true,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        date: "Monday  07:00",
        city: response.data.city,
        humidity:response.data.temperature.humidity,
        description: response.data.condition.description,
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
        });
       
    }

    if(weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                <div className="row">
                    <div className="col-9">
                       <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                       <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
                            <div className="float-left">
                               <span className="temperature">{Math.round(weatherData.temperature)}</span>
                               <span className="unit">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <ul>
                        <li>Precipitation: 18%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                    </div>
                </div>
            </div>
            );
        } else {
            
            const apiKey = "3c0eca18f3a2743b8tdo8c93b0a6483f";
            const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);

            return "Loading...";
        }

    }