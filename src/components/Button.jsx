
import React from 'react';
import '../scss/Button.scss'; 
export default function MyButton({children}) {
    return <button className="btn my-button">{children}</button>;
}
