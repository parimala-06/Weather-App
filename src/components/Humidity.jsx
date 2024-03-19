import React from 'react'
import humidity from '../assets/images/humidity.png'

const Humidity = (props) => {
  return (

    <div className="flex gap-2">
        <img className="rounded-full w-12 h-12" src={humidity} alt="image description"/>
        <div className="flex-col p-1 text-left">
            <div className="text-xl">{props.humidity?props.humidity:`0`}%</div>
            <div className="text-sm">Humidity</div>
        </div>
    </div>
  )
}

export default Humidity