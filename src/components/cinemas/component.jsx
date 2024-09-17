import React from 'react';
import ProfileCard from '../cinema/ProfileCard';
import { useState } from 'react';
export const Cinemas = ({ cinemas }) => {
    const [activeDescription, setActiveDescription] = useState(0);
    const cinema=cinemas[activeDescription]
    return (
        <div className="container">
            {cinemas.map((cinema,index) => (
               <button key={cinema.title} onClick={()=>setActiveDescription(index)} disabled={activeDescription===index}  className="btn btn-primary me-1" >{cinema.title}</button> 
            ))}
            <div className="row">
                    <div className="col-4 d-flex justify-content-center align-items-center mb-4" key={cinema.title}>
                        <ProfileCard cinema={cinema} />
                    </div>
            </div>
        </div>
    );
};
