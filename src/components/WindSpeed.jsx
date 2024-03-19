import React from 'react'
import wind from '../assets/images/wind.png'

const WindSpeed = (props) => {
  return (
    <div className="flex gap-2">
        <img className="rounded-full w-14 h-14" src= {wind} alt="image description"/>
        <div className="flex-col p-1 text-left">
            <div className="text-xl">{props.windSpeed?props.windSpeed:`0`} Km/h</div>
            <div className="text-sm">Wind Speed</div>
        </div>
    </div>
  )
}

export default WindSpeed