import React from 'react'
import Row from './Row'

import './../styles/ContactIcons.scss'


import TelefonIcon from './../assets/images/telefon-icon.png'
import LokasyonIcon from './../assets/images/lokasyon-icon.png'
import MailIcon from './../assets/images/mail-icon.png'


function ContactIcons() {
    return (
        <Row className="contact-icons">
            <Row>
                <a href="">
                    <span> <img src={TelefonIcon} alt="" /> </span>
                    <span>  X (XXX) XXX XX XX  </span>
                </a>
            </Row>
            <Row>
                <a href="">
                    <span> <img src={MailIcon} alt="" /> </span>
                    <span>  info@example.com  </span>
                </a>
            </Row>
            <Row>
                <a href="">
                    <span> <img src={LokasyonIcon} alt="" />
                    </span> <span> XXX / XXXX, XXXXX  </span>
                </a>
            </Row>
        </Row >
    )
}

export default ContactIcons
