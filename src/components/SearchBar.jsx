import React from 'react'

const Search = () => {
  return (
    <div className='flex items-center mt-5 gap-4'>
      <div className="mb-5 flex items-center bg-white/10 rounded-3xl p-6 w-80 h-12">
          <input
            type="search"
            id="placename"
            placeholder="Search..."
            className="bg-transparent outline-none text-white placeholder-white"
          />  
      </div>
        <button className='mb-5 flex items-center bg-white/10 rounded-3xl p-2 h-12'>
          <img src="src/assets/images/search.png" alt="Search" className="p-2 h-10" />
        </button>
    </div>
  )
}

export default Search