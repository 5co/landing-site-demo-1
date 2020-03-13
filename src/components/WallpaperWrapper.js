import React from 'react'

import './../styles/WallpaperWrapper.scss'

function WallpaperWrapper(props) {
    return (
        <div id="wallpaper-wrapper">
            {props.children}
        </div>
    )
}

export default WallpaperWrapper
