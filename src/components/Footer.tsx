import React from 'react'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

import cmd from '../assets/sdc.png'

const Footer = styled.div`
  background-position: right;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.footerLight};
`

const Logo = styled(Link)`
  float: left;
  padding: 20px;
  width: 224px;
`

const MenuItem = styled.div`
  color: ${({ theme }) => theme.primaryDark};
  font-size: 1rem;
  margin-right: 8px;
  padding: 20px;
  font-weight: 700;
`

const LinkArea = styled.div`
  display: flex;
  @media only screen and (max-width: 546px) {
    display: block;
  }
`

export const FooterComponent = () => {
  return (
    <Footer>
      <Logo to="/">
        <img width="100%" src={cmd} alt="logo" id="gms-logo" />
      </Logo>

      <LinkArea>
        <MenuItem>
          Open at: <br />
          (M-F) 9AM - 9PM
        </MenuItem>
        <MenuItem>
          Stephen's Dental Clinic <br />
          123 Tooth Fairy Way
          <br /> Lake Mary, FL 32746
          <br /> (407) 416-1989
        </MenuItem>
      </LinkArea>
    </Footer>
  )
}

export default FooterComponent
