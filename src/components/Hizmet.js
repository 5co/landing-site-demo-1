import React from 'react'
import './../styles/Hizmet.scss'

function Hizmet(props) {
    return (
        <div className="hizmetlerimiz-item">
            <img src={props.icon} alt={props.title} />
            <h3 className="title">{props.title}</h3>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default Hizmet
