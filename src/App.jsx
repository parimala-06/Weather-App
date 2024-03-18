import React, {useEffect, useState} from "react"
import Search from "./components/SearchBar.jsx"
import Climate from "./components/Climate.jsx"
import WindSpeed from "./components/WindSpeed.jsx"
import Humidity from "./components/Humidity.jsx"

function App() {
  const [placeName, setPlaceName] = useState(""); 
  const [temp, setTemp] = useState(""); 
  const [humidity, setHumidity] = useState(""); 
  const [windSpeed, setWindSpeed] = useState(""); 
  const [description, setDescription] = useState(""); 


  const apiKey = "54d164f876854d9769bc70c9ab52cde8";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=coimbatore&units=metric";

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(apiUrl + `&appid=${apiKey}`);
      const data = await response.json();
      console.log(data);

      setPlaceName(data.name); 
      setTemp(data.main.temp.toFixed(1)); 
      setHumidity(data.main.humidity.toFixed(1)); 
      setWindSpeed(data.wind.speed.toFixed(1)); 
      setDescription(data.weather[0].main)


    }

    fetchWeather();
  }, []); // Empty dependency array to run this effect only once on mount


  return (
    <div className="flex flex-col bg-[url('assets/images/bg2.jpg')] bg-contain items-center h-screen font-poppins">
      <div className="text-center font-medium font-sans text-3xl m-4">Weather Application</div>
      <Search/>
      <div className="flex flex-col gap-8 backdrop-blur-sm bg-white/10 h-1/2 w-1/4 text-center rounded-xl">
        <Climate place={placeName} temp={temp} description={description}/>
        <div className="flex justify-around m-5 p-2 gap-5">
          <WindSpeed windSpeed = {windSpeed}/>
          <Humidity humidity={humidity}/>
        </div>
      </div>
    </div>
  )
}

export default App
