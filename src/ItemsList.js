import React from 'react'
import LineItems from './LineItems';

const ItemsList = ({ items, handleDelete, handlecheck }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItems
                    item={item}
                    key={item.id}
                    handleDelete={handleDelete}
                    handlecheck={handlecheck}
                />
            ))
            }
        </ul>
    )
}

export default ItemsList