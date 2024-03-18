import React from 'react'

const WindSpeed = () => {
  return (
    <div className="flex gap-2">
        <img className="rounded-full w-14 h-14" src="src/assets/images/wind.png" alt="image description"/>
        <div className="flex-col p-1 text-left">
            <div className="text-md">2 Km/hr</div>
            <div className="text-md">Wind Speed</div>
        </div>
    </div>
  )
}

export default WindSpeed