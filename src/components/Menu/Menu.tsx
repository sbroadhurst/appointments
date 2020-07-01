import React from 'react'
import { StyledMenu } from './Menu.styled'
import { Link } from 'react-router-dom'

interface Props {
  open: boolean
}

const navigation = (
  <>
    <Link to="/appointments">
      <span role="img" aria-label="about us">
        &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
      </span>
      About us
    </Link>
    <Link to="/appointments">
      <span role="img" aria-label="price">
        &#128197;
      </span>
      Appointments
    </Link>
    <Link to="/contact">
      <span role="img" aria-label="contact">
        &#x1f4e9;
      </span>
      Contact
    </Link>
  </>
)

const Menu = ({ open }: Props) => {
  return <StyledMenu open={open}>{navigation}</StyledMenu>
}
export default Menu
