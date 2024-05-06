import React from 'react'
import { useState } from 'react'
import Map from './map'

const Search = () => {
  const [cityName, setCityName] = useState()
  const [weatherData, setWeatherData] = useState(null)
 
 
  let Api_Key ="6182a273b8ea8c9a9e7f5e9661574f9d"
  
  function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Api_Key}`)
    .then((res) => {
      let data = res.json()
      data.then((arr) => {
        setWeatherData(arr)
        // console.log(arr)
      })
    })
  }

  
  const handleChange = (e) => {
    setCityName(e.target.value)
  }
  

 function handleClick () {
  getData()
 }

  return (
      <div className='flex justify-center absolute top-10 inset-0 gap-2' >
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEejM7A_P0Hs4JRFajVLu6auEmq4H5uFlBlW2o6pNGfg&s" alt="weather logo" className='rounded'  />
        </div>
      <div className='space-x-2 '>
        <input className='rounded p-1' type="text" placeholder='Enter City Name'  onChange={handleChange}/>
        <button className='bg-green-400 rounded  p-1'  onClick={handleClick}>Search</button>

        {weatherData && (
          <div>
        <div className='main'>
          <h1 className='font-bold text-2xl'>{weatherData.name}</h1>
          <h1 className='font-bold text-2xl'>{weatherData.main.temp}</h1>
        </div>
        <Map cityName = {cityName}/>
        </div>
        )}
      </div>
     </div>
  )
}
export default Search; 
