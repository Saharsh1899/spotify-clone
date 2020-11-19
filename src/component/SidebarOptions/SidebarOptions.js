import React from 'react';
import './SidebarOptions.css';

function SidebarOptions({Icon, option}) {
    return (
        <div className="sidebarOptions">
            {Icon && <Icon className="sidebarOptions__icon" />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
    )
}

export default SidebarOptions;
