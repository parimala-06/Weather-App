import React from "react"
import Search from "./components/SearchBar.jsx"
import Climate from "./components/Climate.jsx"
import WindSpeed from "./components/WindSpeed.jsx"
import Humidity from "./components/Humidity.jsx"

function App() {

  return (
    <div className="flex flex-col bg-[url('assets/images/bg2.jpg')] bg-contain items-center h-screen">
      <div className="text-center font-medium font-sans text-3xl m-4">Weather Application</div>
      <Search/>
      <div className="flex flex-col gap-8 backdrop-blur-sm bg-white/10 h-1/2 w-1/4 text-center rounded-xl">
        <Climate/>
        <div className="flex justify-around m-5 p-2 gap-5">
          <WindSpeed/>
          <Humidity/>
        </div>
      </div>
    </div>
  )
}

export default App
