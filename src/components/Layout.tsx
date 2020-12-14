import React from 'react'

import Footer from './Footer'
import Header from './Header'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
  width: 100vw;
`

const Page = styled.div`
  padding-top: 5rem;
`

const Layout = (props: any) => {
  return (
    <Container>
      <Content>
        <Header />
        <Page>{props.children}</Page>
      </Content>
      <Footer />
    </Container>
  )
}

export default Layout
