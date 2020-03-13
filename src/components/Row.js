import React from 'react'
import './../styles/Row.scss'

function Row(props) {
    return (
        <div className={"row " + props.className} {...props} >
            {props.children}
        </div>
    )
}

export default Row
