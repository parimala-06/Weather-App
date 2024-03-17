import React from "react"
function App() {

  return (
    <div className="flex flex-col bg-[url('assets/images/bg2.jpg')] bg-contain items-center h-screen">
      <div className="text-center font-medium font-sans text-3xl m-10">Weather Application</div>
      <div className="flex flex-col gap-8 backdrop-blur-sm bg-white/10 h-1/2 w-1/4 text-center rounded-xl">
        <div className="flex flex-col justify-center items-center h-1/2">
          <img className="rounded-full w-36 h-36" src="src/assets/images/clear.png" alt="image description"/>
          <div className="text-lg">36 C</div>
          <div className="text-lg">Sunny Day</div>
        </div>
        <div className="flex justify-around m-5 p-2">
          <div className="flex flex-col">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="src/assets/images/wind.png" alt="image description"/>
              <div className="text-md ml-2 p-1">Wind Speed</div>
            </div>
              <div className="text-sm m-4">2 Km/hr</div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="src/assets/images/humidity.png" alt="image description"/>
              <div className="text-md ml-2 p-1">Humidity</div>
            </div>
              <div className="text-sm m-4">2 Km/hr</div>
          </div>
        </div>

      </div>
    </div>

 

  )
}

export default App
