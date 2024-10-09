// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ToggleText = () => {
    const [isVisible, setIsVisible] = useState(false); 

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

    return (
        <div>
            <button className='toggle-button' onClick={toggleVisibility}>
                {isVisible ? 'Hide Text' : 'Display Text'}
            </button>
            {isVisible && <p>Hello, World!</p>} 
        </div>
    );
};

export default ToggleText;