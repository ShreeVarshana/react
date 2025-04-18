import React from 'react'

const Header = ({ value }) => {
    return (
        <header>
            <h1>{value}</h1>
        </header>
    )
}


Header.defaultProps = {
    value: "To-Do"
};
export default Header