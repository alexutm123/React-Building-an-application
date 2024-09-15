
import React from 'react';
import '../scss/Button.scss'; 
export default function MyButton({children}) {
    function handleClick() {
        alert('Button clicked!');
    }
    const handleMouseEnter = () => {
       console.log('Button hovered!');
    }
    return <button className="btn my-button" onClick={handleClick} onMouseEnter={handleMouseEnter}>{children}</button>;
}
