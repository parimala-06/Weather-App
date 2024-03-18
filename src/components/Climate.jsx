import React from 'react'

const Climate = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-1/2 mt-5 gap-1 mb-3">
        <img className="rounded-full w-36 h-36" src="src/assets/images/clear.png" alt="image description"/>
        <div className="text-lg">{props.place}</div>
        <div className="text-3xl">{props.temp} °C</div>
        <div className="text-lg">{props.description}</div>
    </div>
  )
}

export default Climate