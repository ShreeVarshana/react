import React from 'react'
import './Content.css';
import ItemsList from './ItemsList';
const Content = ({ items, handleDelete, handlecheck }) => {
    return (
        <main>
            {(items.length) ? (
                <ItemsList
                    items={items}
                    handleDelete={handleDelete}
                    handlecheck={handlecheck}
                />
            ) : (<p style={{ marginTop: '2rem', color: "green" }}>Your list is empty</p>
            )
            }
        </main >
    )
}

export default Content