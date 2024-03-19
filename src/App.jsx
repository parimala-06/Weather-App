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
  const [searchQuery, setSearchQuery] = useState("");
  const [image, setImage] = useState("");


  const apiKey = "54d164f876854d9769bc70c9ab52cde8";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${searchQuery}`;

  // Function to handle search button click
  const handleSearch = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

      setPlaceName(data.name);
      setTemp(data.main.temp.toFixed(1));
      setHumidity(data.main.humidity.toFixed(1));
      setWindSpeed(data.wind.speed.toFixed(1));
      setDescription(data.weather[0].main);

      if (data.weather[0].main == "Clouds"){
        setImage("src/assets/images/clouds.png");
      }
      else if(data.weather[0].main == "Clear"){
        setImage("src/assets/images/clear.png");
      }
      else if(data.weather[0].main == "Drizzle"){
        setImage("src/assets/images/drizzle.png");
      }
      else if(data.weather[0].main == "Rain"){
        setImage("src/assets/images/rain.png");
      }
      else if(data.weather[0].main == "Thunderstrom"){
        setImage("src/assets/images/thunderstrom.png");
      }
      else{
        setImage("src/assets/images/clouds.png");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="flex flex-col bg-[url('assets/images/bg2.jpg')] bg-contain items-center h-screen font-poppins">
      <div className="text-center font-medium font-sans text-3xl m-4">Weather Application</div>
      <Search onChange={handleSearchInputChange} onSearch={handleSearch} />
      <div className="flex flex-col gap-8 backdrop-blur-sm bg-white/10 h-1/2 w-1/4 text-center rounded-xl">
        <Climate place={placeName} temp={temp} description={description} image={image}/>
        <div className="flex justify-around m-5 p-2 gap-5">
          <WindSpeed windSpeed = {windSpeed}/>
          <Humidity humidity={humidity}/>
        </div>
      </div>
    </div>
  )
}

export default App
