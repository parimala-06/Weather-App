import React from "react"
function App() {

  return (
    <div className="flex flex-col bg-[url('assets/images/bg2.jpg')] bg-contain justify-center items-center h-screen">
      <div className="text-center font-medium font-sans text-3xl mb-4">Weather Application</div>
      <div className=" backdrop-blur-sm bg-white/15 h-3/4 w-1/4 text-center rounded-xl">
        <div className="flex justify-center items-center h-1/2">
          <img class="rounded-full w-1/3 h-1/2" src="src/assets/images/clear.png" alt="image description"/>
        </div>
        <div className="flex justify-evenly">
          <div>
            <div>Humidity</div>
          </div>
          <div>Wind Speed</div>
        </div>

      </div>
    </div>

 

  )
}

export default App
