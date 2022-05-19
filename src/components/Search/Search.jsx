import React from 'react'
import './Search.sass'

function Search() {
    return (
        <div >
            <form className='form d-flex'>
            <p className='search-by'>Search by #</p>
            <input className="search-bar" type="search" aria-label="Search" name="search"/>
            </form>
        </div>   
    )
}

export default Search