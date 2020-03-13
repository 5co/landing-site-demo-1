import React from 'react'
import './../styles/App.scss'
import AnaSayfa from './AnaSayfa'
import Hakkimizda from './Hakkimizda'
import Hizmetlerimiz from './Hizmetlerimiz'
import BiziTercihEdenler from './BiziTercihEdenler'
import Iletisim from './Iletisim'
import Footer from './Footer'
import WallpaperWrapper from './WallpaperWrapper'
import FogWrapper from './FogWrapper'

import { BrowserRouter, Switch, Route } from "react-router-dom";



function App() {
  return (

    <BrowserRouter>

      <Route path="/">

        <FogWrapper>
          <header>
            <WallpaperWrapper>
              <AnaSayfa />
              <Hakkimizda />
            </WallpaperWrapper>
          </header>
          <main>
            <Hizmetlerimiz />
            <BiziTercihEdenler />
            <Iletisim />
          </main>
          <Footer />
        </FogWrapper>

      </Route>


    </BrowserRouter>
  )
}

export default App
