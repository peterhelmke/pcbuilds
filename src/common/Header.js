import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  overflow: hidden;
  display:grid;
  grid-template-rows: 50px 50px;
  background: linear-gradient(to right, #11002C, #330086);
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TitleWhite = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  color: white;
`

const TitleYellow = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  color: #FFDE00;
`

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`

const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => (p.isActive ? '' : 'rgba(192,192,192,0.15)')};
  color: ${p => (p.isActive ? 'white' : '#bbbbbb')};
  font-size: 24px;
  font-family: 'Oswald', sans-serif;
`

export default function Header() {

  return (
    <StyledHeader>
      <TitleContainer>
        <TitleWhite>build</TitleWhite>
        <TitleYellow>IT</TitleYellow>
      </TitleContainer>
      <Nav>
        <Link isActive={true}>All</Link>
        <Link>Gaming</Link>
        <Link>Editing</Link>
        <Link>Office</Link>
      </Nav>
    </StyledHeader>
  )
}
