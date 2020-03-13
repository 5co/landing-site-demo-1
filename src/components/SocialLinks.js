import React from 'react'


import Row from './Row'

import InstagramIcon from './../assets/images/instagram-icon.png'
import FacebookIcon from './../assets/images/facebook-icon.png'
import LinkedinIcon from './../assets/images/linkedin-icon.png'
import TwitterIcon from './../assets/images/twitter-icon.png'

import './../styles/SocialLinks.scss'



function SocialLinks() {
    return (

        <Row className="social-links">
            <a href=""
                target="_blank">
                <img
                    alt=""
                    src={InstagramIcon}
                />
            </a>
            <a href=""
                target="_blank">
                <img
                    alt=""
                    src={FacebookIcon}
                />
            </a>
            <a href=""
                target="_blank">
                <img
                    alt=""
                    src={TwitterIcon}
                />
            </a>
            <a href="">
                <img
                    alt=""
                    src={LinkedinIcon}
                />
            </a>
        </Row>

    )
}

export default SocialLinks
