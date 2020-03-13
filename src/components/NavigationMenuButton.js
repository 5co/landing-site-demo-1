import React, { useState } from 'react'
import './../styles/NavigationMenuButton.scss'

function NavigationMenuButton(props) {

    const [Clicked, setClicked] = useState('')

    let changeState = () => {
        if (Clicked === '') setClicked('clicked'); else setClicked('');
    }


    return (
        <div id="navigation-menu-button">
            <button className={Clicked} id="navigation-menu-button-inner" onClick={() => {
                changeState();
                props.onClick();
            }}>
                 &#9776; 
            </button>
        </div>
    )
}

export default NavigationMenuButton
