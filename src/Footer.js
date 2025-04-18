import React from 'react'

const Footer = ({ length }) => {
    const year = new Date();
    return (

        <footer className="footer">
            <p>The {(length === 1) ? "Task" : "Tasks"} to be completed {length}</p>
            Copyright &copy; Varshana {year.getFullYear()}
        </footer>
    )
}

export default Footer