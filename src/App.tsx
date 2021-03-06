import React, { useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './theme'

import { HashRouter, Switch, Route, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/home'
import AboutUs from './routes/aboutUs'
import Appointments from './routes/appointments'
import Contact from './routes/contact'
import HomeAssetProvider from './contexts/homeContext'

const AppLayout = styled.div``

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <HashRouter>
      <HomeAssetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ScrollToTop />
          <Switch>
            <>
              <Route path="/about" component={AboutUs} />
              <Route path="/appointments" component={Appointments} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/" component={Home} />
            </>
          </Switch>
        </ThemeProvider>
      </HomeAssetProvider>
    </HashRouter>
  )
}

export default App
