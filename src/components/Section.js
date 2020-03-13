import React from 'react'
import './../styles/Section.scss'

function Section(props) {
    return (
        <section id={props.id} className="mainSection">
            {props.children}
        </section>
    )
}

export default Section
