import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Burger from './Burger'
import Menu from './Menu'
import styled from 'styled-components'
// import TopNavBarTransparent from '../assets/TopNavBarTransparent.png'

// import ToothLogo from '../assets/ToothLogo.png'
import sdc from '../assets/sdc.png'

const Logo = styled(Link)`
  position: absolute;
  margin-left: 100px;
  z-index: 10;
  margin-top: 2vh;
`

const Head = styled.div`
  display: flex;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  z-index: 10;
  position: absolute;
  max-height: 10vh;
`

const TopNavBarImage = styled.img``

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false)

  function checkopen() {
    if (open) {
      setOpen(!open)
    }
  }

  return (
    <div onClick={() => checkopen()}>
      <Head>
        {/* <TopNavBarImage src={TopNavBarTransparent} alt="TopNav" /> */}
        <Logo to="/">
          <img width="130" src={sdc} alt="logo" id="gms-logo" />
        </Logo>
        <Burger open={open} setOpen={setOpen} />
      </Head>
      <Menu open={open} />
    </div>
  )
}

export default HeaderComponent
