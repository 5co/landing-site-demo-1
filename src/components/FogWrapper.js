import React from 'react'
import './../styles/FogWrapper.scss'

function FogWrapper(props) {
    return (
        <div className='fog-parent'>
            <div className='fog-class'></div>
            <div className='fog-child'>
                {props.children}
            </div>

        </div>
    )
}

export default FogWrapper
