import React from 'react';

const Toggle = ({ tcolor, setnewtcolor }) => {
    return (
        <div>
            <button onClick={() => setnewtcolor(tcolor === 'black' ? 'white' : 'black')}>
                Toggle The Color
            </button>
        </div>
    );
};

export default Toggle;
