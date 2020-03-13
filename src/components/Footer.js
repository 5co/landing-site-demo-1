import React from 'react'
import './../styles/Footer.scss'
import NavigationLogo from './NavigationLogo'
import Logo from './../assets/images/logo.svg'


import ContactIcons from './ContactIcons'
import FooterText from './FooterText'
import SocialLinks from './SocialLinks'
import Row from './Row'
import CloudyBackground from './CloudyBackground'


function Footer() {
    return (
        <footer>
            <section id="footer">
                <FooterText />
                <NavigationLogo logo={Logo} />
                <ContactIcons />
                <SocialLinks />
            </section>
            <CloudyBackground>
                <Row style={{ minHeight: '10vh', color: 'white' }}>
                    Lorem Ipsum © Tüm hakları Saklıdır
                </Row>
            </CloudyBackground>
        </footer>
    )
}

export default Footer
