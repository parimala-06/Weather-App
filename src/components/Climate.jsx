import React from 'react'
import cloudsImage  from '../assets/images/clouds.png'

const Climate = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-1/2 mt-5 gap-1 mb-3">
        <img className="rounded-full w-36 h-36" src={props.image? `../assets/images/${props.image}.png` : cloudsImage} alt="image description"/>
        <div className="text-lg">{props.place?props.place:`Place`}</div>
        <div className="text-3xl">{props.temp?props.temp:`0`} °C</div>
        <div className="text-lg">{props.description?props.description:`Description`}</div>
    </div>
  )
}

export default Climate