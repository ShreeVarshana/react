import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './Additem.css';

const Additem = ({ newItem, handleSubmit, setnewItem }) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>

            <input
                type="text"
                autoFocus
                id="addItem"
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setnewItem(e.target.value)}
            />

            <button
                type='Submit'
                aria-label='Add Item'
            >
                <FaPlus />
            </button>

        </form>
    )
}

export default Additem