import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from"./WeatherForecast";
import axios from "axios";


import "./Weather.css";
export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
       setWeatherData( {
        ready: true,
        coordinates: response.data.coordinates,
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        date: new Date(response.data.time * 1000),
        description: response.data.condition.description,
        icon: response.data.condition.icon,
        wind: response.data.wind.speed,
        city: response.data.city,
        });
       
    }

    function search(){
        const apiKey = "3c0eca18f3a2743b8tdo8c93b0a6483f";
            const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search(city);   
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    if(weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                       <input type="search" placeholder="Enter a city.." className="form-control search-input" autoFocus="on" onChange={handleCityChange}/>
                    </div>
                    <div className="col-3">
                       <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
                </form>
                <WeatherInfo data={weatherData}/>
                <WeatherForecast coordinates={weatherData.coordinates}/>
                <footer>
                    This project was coded by <a href="https://tranquil-tarsier-93eb74.netlify.app/" target="_blank" rel="noopener noreferrer">Yana Gujral</a> and is{" "}
                    <a href="https://github.com/yanagujral008" target="_blank" rel="noopener noreferrer">
                    open-sourced on GitHub
                    </a> and <a href="https://weatherappweek5mk.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
                </footer>
            </div>
            );
        } else {
            search();
            return "Loading...";
        }

    }