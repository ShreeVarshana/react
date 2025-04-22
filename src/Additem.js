import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './Additem.css';
import { useRef } from 'react';

const Additem = ({ newItem, handleSubmit, setnewItem }) => {

    const inputRef = useRef()

    return (
        <form className='addForm' onSubmit={handleSubmit}>

            <input
                type="text"
                autoFocus
                ref={inputRef}
                id="addItem"
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setnewItem(e.target.value)}
            />

            <button
                type='Submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>

        </form>
    )
}

export default Additem