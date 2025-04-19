import React from 'react'

const Inputbox = ({ color, setnewcolor }) => {
    return (
        <form>
            <input
                type='text'
                value={color}
                onChange={(e) => setnewcolor(e.target.value)}
            />
        </form>
    )
}

export default Inputbox