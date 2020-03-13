import React from 'react'

import './../styles/CloudyBackground.scss'

function CloudyBackground(props) {
    return (
        <div className='cloudy-background'>
            {props.children}
        </div>
    )
}

export default CloudyBackground
