import React, {useState} from 'react' 
import '../Styles/Weather.css'
import WeatherInfo from './Weatherinfo'


function WeatherContainer () {
const API_KEY = 'e4df0be6080b46679100abb40ef4b713'
const [ searchQuery, setSearchQuery] = useState('')
const [weatherData, setWeatherData ] = useState( { 
    temp: null,
    humidity:null,
    desc:null,
    city:null,
    high: null,
    low: null

})
const [ isValidZipCode, setIsValidZipCode] = useState(true)

function updateSearchQuery(event) {
    let zipCode = event.target.value
    let isValid = validateZipCode(zipCode)
    setSearchQuery(zipCode)
    
    if (isValid || zipCode === '' || isValid.length === 5) {
        setIsValidZipCode(true)
       
    } else { 
        setIsValidZipCode(false)
    }
    
    
  
     

}

function validateZipCode(zipCode) { 
    let regex = /[0-9]{5}/
    return regex.test(zipCode)

}


function getWeatherData() {
    fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${searchQuery},US&appid=${API_KEY}`) 
    .then(response => response.json())
    .then(data => { setWeatherData({ 
       city: data
    })  
        
//    console.log(data)

    const lat = data["lat"]
    const lon = data["lon"]
    


fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`)
.then(response => response.json())
.then(data => { setWeatherData({


    temp: Math.round(data.current.temp),
    humidity: data.current.humidity,
    desc: data.daily[0].weather.description,
    high: Math.round(data.daily[0].temp.max),
    low: Math.round(data.daily[0].temp.min)


})

    console.log(data)

    
 })


   

})



}



    return ( 
        <section className= "weather-container">
            <header className='weather-header'>
                <h3>What's The Weather</h3>
                <div>
                    <input placeholder='Zip Code'
                           className =" search-input"
                           onChange={updateSearchQuery}
                           maxLength='5'
                           
                         />
                    <button onClick={getWeatherData}
                    className ='material-icons'>search </button>            
                </div>
            </header>
            <p className="error">{isValidZipCode ? '' : 'Invalid Zip Code'} </p>
             <section className='weather-info'>
                 
                 { weatherData.temp === null ? ( 
                     <p>No Weather to Display
                         <i className = 'material-icons'>wb_sunny</i></p>
                 ) : <WeatherInfo data={weatherData} />
                 }  
                 
                 
                 
                 
                 </section>


            </section>
    )






}


export default WeatherContainer