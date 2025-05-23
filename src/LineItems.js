import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';


const LineItems = ({ item, handleDelete, handlecheck }) => {
    return (
        <li className="item" key={item.id}>
            <input
                type="checkbox"
                onChange={() => handlecheck(item.id)}
                checked={item.checked}
            />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handlecheck(item.id)}>{item.content}</label>
            <FaTrashAlt
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
                onClick={() => { handleDelete(item.id) }}
            />
        </li>

    )
}

export default LineItems