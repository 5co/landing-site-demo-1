import React from 'react'
import './../styles/Musteri.scss'


function Musteri(props) {
    return (
        <div {...props} className="musteri">

            <img src={props.logo} />

        </div>
    )
}

export default Musteri
