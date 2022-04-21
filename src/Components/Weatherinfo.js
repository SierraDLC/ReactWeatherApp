import React from 'react'
import '../Styles/Weather.css'

export default function Weatherinfo(props) {
  
    const {temp, humidity, desc, city, high, low } =props.data
  
    return (
    <React.Fragment> 

        <h3>{desc}</h3> 
        <div className='header-description'>
        <h3>City</h3>
        <p>{city}</p> 
        </div>
        <div className='header-description'>
        <h4>Temperature</h4>  
        <p>{temp}</p>
        </div>
        <div className='header-description'>
        <h4>Humidity</h4>
        <p>{humidity}</p>
        </div>
        <div className='header-description'>
        <p>High</p> 
        <p>{high}</p> 
        </div>
        <div className='header-description'>
        <p>Low</p>  
        <p>{low}</p>
        </div>

       
        
        
    </React.Fragment>
  )
}
