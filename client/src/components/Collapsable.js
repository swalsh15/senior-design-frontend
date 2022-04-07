import React from 'react';
import './Collapsable.css';
const Collapsible = ({ children, label }) => {
    return (
      <div className="container">
        <button className='toggle'>{label}</button>
  
        <div>{children}</div>
      </div>
    );
  };
  
export default Collapsible;