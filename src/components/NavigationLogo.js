import React from 'react'
import './../styles/NavigationLogo.scss'
import NavigationLink from './NavigationLink'

function NavigationLogo(props) {
    return (
        <div className="navigation-logo">
            <NavigationLink to="/#">
                <img src={props.logo} alt="Lorem Ipsum" />
            </NavigationLink>
        </div>
    )
}

export default NavigationLogo
