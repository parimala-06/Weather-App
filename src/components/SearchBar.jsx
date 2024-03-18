import React from 'react'

const Search = () => {
  return (
    <div className="m-5 flex items-center bg-white/10 rounded-md p-2 w-1/4">
        <img src="src/assets/images/search.png" alt="Search" className="w-6 h-6 mr-2" />
        <input
          type="search"
          id="placename"
          placeholder="Search..."
          className="bg-transparent outline-none text-white placeholder-white"
        />
      </div>
  )
}

export default Search