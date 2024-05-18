import React, {useState} from "react"
import Search from "./components/SearchBar.jsx"
import Climate from "./components/Climate.jsx"
import WindSpeed from "./components/WindSpeed.jsx"
import Humidity from "./components/Humidity.jsx"
import clouds  from './assets/images/clouds.png'
import clear  from './assets/images/clear.png'
import rain  from './assets/images/rain.png'
import drizzle  from './assets/images/drizzle.png'
import thunderstrom  from './assets/images/thunderstrom.png'
import snow  from './assets/images/snow.png'

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
      let description = data.weather[0].main;

      if (description == "Clouds"){
        setImage(clouds);
      }
      else if(description == "Clear"){
        setImage(clear);
      }
      else if(description == "Drizzle"){
        setImage(drizzle);
      }
      else if(description == "Rain"){
        setImage(rain);
      }
      else if(description == "Thunderstrom"){
        setImage(thunderstrom);
      }
      else if(description == "Snow" || "Fog"){
        setImage(snow);
      }
      else{
        setImage(clouds);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found. Kindly Spellcheck")
    }
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="flex flex-col bg-[url('assets/images/bg2.jpg')] bg-contain items-center h-screen font-poppins overflow-hidden">
      <div className="text-center font-medium font-sans text-3xl m-6">Weather Application</div>
      <Search onChange={handleSearchInputChange} onSearch={handleSearch} />
      <div className="flex flex-col gap-6 backdrop-blur-sm bg-white/10 h-1/2 w-1/4 text-center rounded-xl">
        <Climate place={placeName} temp={temp} description={description} image={image}/>
        <div className="flex justify-around m-6 p-6 gap-5">
          <WindSpeed windSpeed = {windSpeed}/>
          <Humidity humidity={humidity}/>
        </div>
      </div>
    </div>
    
  )
}

export default App
