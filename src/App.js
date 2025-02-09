import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="Container">
      
      <Weather defaultCity="Vancouver"/>
      <footer>
        This project was coded by <a href="https://tranquil-tarsier-93eb74.netlify.app/" target="_blank" rel="noreferrer">Miki.I</a> and is{" "}
      <a href="https://github.com/Mikicanad/react-week5-weather-app" target="_blank" rel="noreferrer">
       open-sourced on GitHub
      </a> and <a href="https://weatherappweek5mk.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );
}


