import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Wrapper>
      <StyledLink to={'/'}>Home</StyledLink>
      <StyledLink to={'/about'}>About</StyledLink>
      <StyledLink to={'/contact'}>Contact</StyledLink>
    </Wrapper>
  )
}

const StyledLink = styled(Link)`
  display: grid;
  justify-items: center;
  align-items: center;
  color: #000;
  text-decoration: none;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: #000;
`
