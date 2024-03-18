import React from 'react'

const WindSpeed = () => {
  return (
    <div className="flex flex-col">
        <div className="flex">
            <img className="rounded-full w-8 h-8" src="src/assets/images/wind.png" alt="image description"/>
            <div className="text-md ml-2 p-1">Wind Speed</div>
        </div>
        <div className="text-sm m-4">2 Km/hr</div>
    </div>
  )
}

export default WindSpeed