import React from 'react'
import './../styles/SurecItem.scss'

function SurecItem(props) {
    return (
        <div {...props} className='surec-item'>
            <img src={props.icon} alt={props.description} />
            <span className='background'>{props.number}</span>
            <span className='description'>{props.description}</span>
        </div>
    )
}

export default SurecItem
