import React from 'react'
import SlideDownIcon from './../assets/images/slide-down-icon.png'
import './../styles/SlideDown.scss'
import NavigationLink from './NavigationLink'

function SlideDown() {
    return (
        <div id="slide-down">
            <NavigationLink to='./#about-us'>
                <img src={SlideDownIcon} alt="" id="slide-down-icon" />
            </NavigationLink>
        </div>
    )
}

export default SlideDown
