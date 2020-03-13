import React, { useState } from 'react'
import NavigationContainer from './NavigationContainer'
import NavigationMenu from './NavigationMenu'
import NavigationLogo from './NavigationLogo'
import Logo from './../assets/images/logo.svg'
import './../styles/Navbar.scss'
import NavigationMenuButton from './NavigationMenuButton'


function Navbar() {

    const [isActive, setisActive] = useState('')

    let activateNavbar = () => {
        if (isActive === 'active') setisActive(''); else setisActive('active');
    }

    return (
        <nav id="navbar">
            <div id="navigation-mobile-header">
                <NavigationLogo logo={Logo} />
                <NavigationMenuButton onClick={activateNavbar} />
            </div>

            <NavigationContainer onClick={activateNavbar} isActive={isActive}>
                <NavigationMenu />
            </NavigationContainer>
        </nav>
    )
}

export default Navbar
