import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Api from './Pages/ApiPage/ApiPage';
import Home from './Pages/Home/Home';
import Context from './Context/Context';
import WeatherPage from './Pages/weatherPage/WeatherPage';

function App() {
  const [lat, setLat] = useState("37")
  const [ lon, setLon] = useState("35.3213333")
  const [ wetData, setWetData] = useState("")
  const [ dailyData, setDailyData] = useState("")
  const ApiKey = process.env.REACT_APP_API_KEY
  const url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+ApiKey+"&units=imperial&lang=tr"
  const url2= "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+ApiKey+"&units=imperial&lang=tr"
  const data = {
    lat,setLat,lon,setLon,
    wetData, setWetData,
    dailyData, setDailyData
  }

  useEffect(() => {
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => 
      setWetData(data)
    )

    fetch(url2)
    .then(res=>{
      return res.json()
    } )    
    .then(data => 
      setDailyData(data))
}, [lat, lon])
  // map dosyası kurulamıyor
  return (
    <>
    <Context.Provider value={data}>
       <Toaster/>
      <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/main' element={<Api/>}  ></Route>
        <Route path='/weather' element={<WeatherPage/>} ></Route>
        
      </Routes>
      </Context.Provider>
    </>  
  );
}

export default App;
