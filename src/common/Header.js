import { NavLink } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: 50px 50px;
  background: linear-gradient(to right, #11002c, #330086);
`

const HeaderTitleContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

const HeaderTitleWhite = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  color: #f1f1f1;
`

const HeaderTitleYellow = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  color: #ffde00;
`

const HeaderCategoryNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const HeaderCategoryLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: 'Oswald', sans-serif;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(192, 192, 192, 0.12);
  &.active {
    background: transparent;
    color: #f1f1f1;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <HeaderTitleContainer exact to="/">
        <HeaderTitleWhite>build</HeaderTitleWhite>
        <HeaderTitleYellow>IT</HeaderTitleYellow>
      </HeaderTitleContainer>
      <HeaderCategoryNav>
        <HeaderCategoryLink exact to="/">
          All
        </HeaderCategoryLink>
        <HeaderCategoryLink to="/gaming">Gaming</HeaderCategoryLink>
        <HeaderCategoryLink to="/editing">Editing</HeaderCategoryLink>
        <HeaderCategoryLink to="/office">Office</HeaderCategoryLink>
      </HeaderCategoryNav>
    </StyledHeader>
  )
}
