import React from 'react'

const Searchitem = () => {
    return (
        <form className="search form" onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                id='search'
                role='searchbox'
                placeholder='Search Items'
            />

        </form>
    )
}

export default Searchitem