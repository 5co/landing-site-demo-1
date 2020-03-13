import React from 'react'
import Section from './Section'
import Row from './Row'
import Musteri from './Musteri'


import LogoIcon from './../assets/images/logo.svg'
import BiziTercihEdenlerTitle from './BiziTercihEdenlerTitle'


function BiziTercihEdenler() {
    return (
        <Section id="customers">

            <BiziTercihEdenlerTitle />

            <Row
                style={
                    {
                        paddingTop: '5vh',
                        paddingBottom: '5vh',
                        flexWrap: 'wrap',
                        paddingLeft: '10vw',
                        paddingRight: '10vw',
                    }
                }
            >

                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />
                <Musteri logo={LogoIcon} />


            </Row>



        </Section>
    )
}

export default BiziTercihEdenler
