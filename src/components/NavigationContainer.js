import React from 'react'
import './../styles/NavigationContainer.scss'

function NavigationContainer(props) {
    return (
        <div onClick={props.onClick} className={props.isActive} id="navigation-container">
            {props.children}
        </div>
    )
}

export default NavigationContainer
