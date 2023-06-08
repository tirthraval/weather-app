import './App.css';
import CurrentWeather from './component/current-weather/current-weather';
import Search from './component/search/search';
import {weather_API_URL, weather_API_KEY} from './api'
import { useState } from 'react';
import Forcast from './component/forcast/forcast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const[forcast, setForcast] = useState(null);
  const handleOnSearch = (searchData) =>{
    const [latitude, longitude] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${weather_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${weather_API_KEY}&units=metric`);
    const currentForcastFetch =  fetch(`${weather_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, currentForcastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForcast({city:searchData.label, ...forcastResponse});
    })
    .catch((err)=>console.log(err));

    // console.log(currentWeather);
    console.log(forcast);
     
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearch}></Search>
      {currentWeather &&<CurrentWeather data ={currentWeather}/>}
      {forcast && <Forcast data ={forcast}/>}
    </div>
  );
}

export default App;
