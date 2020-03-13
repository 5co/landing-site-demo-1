import React from 'react'
import Section from './Section'
import './../styles/Hakkimizda.scss'
import VerticalLine from './VerticalLine'
import Row from './Row'
import HakkimizdaTitle from './HakkimizdaTitle'
import HakkimizdaDescription from './HakkimizdaDescription'

function Hakkimizda() {
    return (
        <Section id="about-us">
            <Row>
                <HakkimizdaTitle />
                <VerticalLine />
                <HakkimizdaDescription />

            </Row>
        </Section>
    )
}

export default Hakkimizda