import React from 'react'
import Section from './Section'
import './../styles/Iletisim.scss'
import CloudyBackground from './CloudyBackground'
import ContactForm from './ContactForm'
import ContactTitle from './ContactTitle'
import ContactSubTitle from './ContactSubTitle'

function Iletisim() {
    return (
        <CloudyBackground>
            <Section id="contact">

                <ContactTitle />
                <ContactSubTitle />

                <ContactForm />                
                
        </Section>
        </CloudyBackground>
    )
}

export default Iletisim
