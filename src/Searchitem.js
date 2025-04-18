import React from 'react'
import './Searchitem.css'

const Searchitem = ({ setsearch, search }) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                id='search'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setsearch(e.target.value)}
            />

        </form>
    )
}

export default Searchitem