import React from 'react';


export default function WayToTeach({ title, description }) {
  function handleClick() {
    localStorage.setItem('auth-time', new Date());
  }

  return (
    <li className="list-group-item border border-1 rounded-3 d-flex justify-content-between align-items-start" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        <p className="mb-1">{description}</p>
      </div>
      <button className="btn btn-info btn-sm">Подробнее</button>
    </li>
  );
}
