import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  background: linear-gradient(to right, #11002c, #330086);
  user-select: none;
`

export const StyledHeaderGrid = styled.div`
  margin: auto;
  max-width: 810px;
  display: grid;
  grid-template-rows: 50px 50px;
`

export const HeaderTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const HeaderTitleWrapper = styled.div`
  display: flex;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  align-items: center;
  justify-content: center;
`

export const HeaderTitleWhite = styled.div`
  cursor: pointer;
  color: white;
`

export const HeaderTitleYellow = styled.div`
  cursor: pointer;
  color: #ffde00;
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  padding: 13px;
  color: rgba(255, 255, 255, 0.3);
  a {
    transition: all 0.3s ease-in;
    color: rgba(255, 255, 255, 0.3);
    :hover {
      color: white;
    }
  }
`

export const HeaderCategoryNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const HeaderCategoryLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: 'Oswald', sans-serif;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(192, 192, 192, 0.12);
  transition: all 0.3s ease-in;
  :hover  {
    color: white;
  }
  &.active {
    background: transparent;
    color: white;
  }
`
