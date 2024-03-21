import React from 'react'
import cloudsImage  from '../assets/images/clouds.png'

const Tile = (props) => {
  return (
    <div className='flex gap-8 m-5 p-5'>
        <div className=' backdrop-blur-sm bg-white/10 h-40 w-40 text-center rounded-xl items-center justify-center'>
            <div>Tomorrow</div>
            <img className="rounded-full w-20 h-20" src={props.image? props.image : cloudsImage} alt="image description"/>
            <div className="text-3xl">{props.temp? props.temp : `0`} °C</div>
            <div className="text-lg">{props.description? props.description : `Description`}</div>
        </div>
    </div>
  )
}

export default Tile