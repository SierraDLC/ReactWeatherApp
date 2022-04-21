import React from 'react';
import '../Styles/Weather.css'

function WeatherInfo({ data: { temp, humidity, city, desc, high, low } }) {
  return (
    <>
      <h3>{desc}</h3>
      <section className="weather-data-flex">
        <div className="header-description">
          <h4>City</h4>
          <p>{city}</p>
        </div>
        <div className="header-description">
          <h4>Temperature</h4>
          <p>
            {temp}
            <span className="degree-symbol" /> F
          </p>
        </div>
        <div className="header-description">
          <h4>Humidity</h4>
          <p>{humidity}%</p>
        </div>
        <div className="header-description">
          <h4>Low</h4>
          <p>{low}</p>
        </div>
        <div className="header-description">
          <h4>High</h4>
          <p>{high}</p>
        </div>


        
      </section>
    </>
  );
}

export default WeatherInfo;