import React from 'react'
import search from '../assets/images/search.png'

const Search = ({ onChange , onSearch}) => {

  const handleButtonClick = () => {
    onSearch();
  };

  return (
    <div className='flex items-center mt-5 gap-4'>
      <div className="mb-5 flex items-center bg-white/10 rounded-3xl p-6 w-80 h-12">
          <input
            type="text"
            id="placename"
            placeholder="Search..."
            className="bg-transparent outline-none text-white placeholder-white"
            onChange={onChange}
            autoComplete="off"
            spellCheck="true"
          />  
      </div>
        <button onClick={handleButtonClick} className='mb-5 flex items-center bg-white/10 rounded-3xl p-2 h-12'>
          <img src={search} alt="Search" className="p-2 h-10" />
        </button>
    </div>
  )
}

export default Search