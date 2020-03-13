import React from 'react'
import NavigationLink from './NavigationLink'
import './../styles/NavigationMenu.scss'

function NavigationMenu() {
    return (
        <ul id='navigation-menu'>
            <NavigationLink to="./#">Home</NavigationLink>
            <NavigationLink to="./#about-us">About Us</NavigationLink>
            <NavigationLink to="./#services">Services</NavigationLink>
            <NavigationLink to="./#customers">Customers</NavigationLink>
            <NavigationLink to="./#contact">Contact</NavigationLink>
        </ul>
    )
}

export default NavigationMenu
