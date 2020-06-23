import React, { useState, useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import Burger from './Burger'
import Menu from './Menu'
import styled from 'styled-components'

import ToothLogo from '../assets/ToothLogo.png'

const Logo = styled(Link)`
  position: absolute;
  z-index: 1;
  margin-left: 100px;
`

const Head = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  margin: 20px;
`

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
        <Logo to="/">
          <img width="50" src={ToothLogo} alt="logo" id="gms-logo" />
        </Logo>
        <Burger open={open} setOpen={setOpen} />
      </Head>

      <Menu open={open} />
    </div>
  )
}

export default HeaderComponent
