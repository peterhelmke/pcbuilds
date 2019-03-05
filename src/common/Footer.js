import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
  background: linear-gradient(to right, #11002C, #330086);
`

const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;

  &.active {
    background: 'rgba(192,192,192,0.15)';
  }
`

export default function Footer() {

  return (
    <Nav>
        <Link>€&uarr;&darr;</Link>
        <Link>FilterIcon</Link>
        <Link>BookmarkIcon</Link>
    </Nav>
  )
}
