import React from 'react'
import './../styles/NavigationLink.scss'

function NavigationLink(props) {
    return (
        <li id="navigation-link">
            <a href={props.to}>
                {props.children}
            </a>
        </li>
    )
}

export default NavigationLink
