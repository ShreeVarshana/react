import React from 'react';
import './App.css';
import Inputbox from './Inputbox';
import Toogle from './Toggle'
import { useState } from 'react'

const Appp = () => {

    const [color, setnewcolor] = useState('')
    const [tcolor, setnewtcolor] = useState('')

    return (
        <div >
            <p className="rectangle-box" style={{ backgroundColor: color, color: tcolor }}>{color}</p>
            <Inputbox
                color={color}
                setnewcolor={setnewcolor}
            />
            <Toogle
                tcolor={tcolor}
                setnewtcolor={setnewtcolor}
            />

        </div>
    );
};

export default Appp;
