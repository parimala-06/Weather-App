import React from 'react'

const Climate = () => {
  return (
    <div className="flex flex-col justify-center items-center h-1/2 mt-3">
        <img className="rounded-full w-36 h-36" src="src/assets/images/clear.png" alt="image description"/>
        <div className="text-md">Place Name</div>
        <div className="text-lg">36 C</div>
        <div className="text-md">Sunny Day</div>
    </div>
  )
}

export default Climate