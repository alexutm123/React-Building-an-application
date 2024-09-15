
import React from 'react';
import '../scss/Button.scss'; 
export default function MyButton({children,onClick}) {
    
    return <button className="my-button" onClick={onClick}>{children}</button>;
}
