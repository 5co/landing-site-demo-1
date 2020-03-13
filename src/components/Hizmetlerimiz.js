import React from 'react'
import Section from './Section'
import './../styles/Hizmetlerimiz.scss'
import CloudyBackground from './CloudyBackground'
import Row from './Row'
import Hizmet from './Hizmet'

import DijitalMedyaIcon from './../assets/images/dijital-medya-icon.png'
import KreatifIcon from './../assets/images/kreatif-icon.png'
import ProduksiyonIcon from './../assets/images/produksiyon-icon.png'
import MarkaDanismanligiIcon from './../assets/images/marka-danismanligi-icon.png'
import SurecItem from './SurecItem'

import StratejiKonseptIcon from './../assets/images/strateji-konsept-icon.png'
import FikriTasarlaIcon from './../assets/images/fikri-tasarla-icon.png'
import GelistirIcon from './../assets/images/gelistir-icon.png'
import TestEtPazarlaIcon from './../assets/images/test-et-pazarla-icon.png'
import SurecTitle from './SurecTitle'



function Hizmetlerimiz() {
    return (
        <Section id="services">
            <CloudyBackground>
                <Row style={
                    {
                        minHeight: '45vh'
                    }
                }>
                    <Hizmet
                        icon={DijitalMedyaIcon}
                        title="Lorem ipsum"
                        description="Semper viverra nam libero justo laoreet sit amet. Eget duis at tellus at urna condimentum mattis. Nibh tellus molestie nunc non blandit massa enim nec."
                    />

                    <Hizmet
                        icon={KreatifIcon}
                        title="Lorem ipsum"
                        description="Sit amet massa vitae tortor condimentum. Convallis posuere morbi leo urna molestie at. Tempus quam pellentesque nec nam aliquam sem et tortor consequat."
                    />

                    <Hizmet
                        icon={ProduksiyonIcon}
                        title="Lorem ipsum"
                        description="Ultricies leo integer malesuada nunc vel risus commodo viverra. Ullamcorper sit amet risus nullam eget. Ut diam quam nulla porttitor massa id neque."
                    />


                    <Hizmet
                        icon={MarkaDanismanligiIcon}
                        title="Lorem ipsum"
                        description="Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Id ornare arcu odio ut sem. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in."
                    />

                </Row>
            </CloudyBackground>


            <Row style={
                {
                    minHeight: '45vh'
                }
            }>

                <SurecTitle />

                <Row>
                    <SurecItem
                        number={1}
                        icon={StratejiKonseptIcon}
                        description="Lorem Ipsum"
                    />


                    <SurecItem
                        number={2}
                        icon={FikriTasarlaIcon}
                        description="Dolor"
                    />


                    <SurecItem
                        number={3}
                        icon={GelistirIcon}
                        description="Sit Amet"
                    />


                    <SurecItem
                        number={4}
                        icon={TestEtPazarlaIcon}
                        description="Lorem Ipsum"
                    />
                </Row>
            </Row>

            <CloudyBackground>
                <Row style={
                    {
                        minHeight: '10vh'
                    }
                }>

                </Row>
            </CloudyBackground>

        </Section>
    )
}

export default Hizmetlerimiz
