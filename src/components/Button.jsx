
import React from 'react';
import '../scss/Button.scss'; 
export default function MyButton({children,onClick,isActive}) {
    
    return <button className={isActive ? 'my-button active' : ' ' } onClick={onClick}>{children}</button>;
}
