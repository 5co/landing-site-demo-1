import React from 'react'
import './../styles/Text.scss'

export let LargeText = (props) => {
    return (
        <span {...props} className="text-large">
            {props.children}
        </span>
    )
}

export let MediumText = (props) => {
    return (
        <span {...props} className="text-medium">
            {props.children}
        </span>
    )
}

export let SmallText = (props) => {
    return (
        <span {...props} className="text-small">
            {props.children}
        </span>
    )
}

export let Text = (props) => {
    return (
        <span {...props} className="text-large">
            {props.children}
        </span>
    )
}

export default Text