import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background: linear-gradient(to right, #11002c, #330086);
  user-select: none;
  width: 100%;
`

export const StyledFooterGrid = styled.div`
  margin: auto;
  display: grid;
  max-width: 810px;
  grid-template-columns: repeat(3, 1fr);
  height: 50px;
`

export const FooterNavBookmark = styled(NavLink)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 32px;
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

export const BookmarkCounter = styled.div`
  display: flex;
  font-size: 11px;
  bottom: 34%;
  z-index: 1;
  position: absolute;
  color: #f1f1f1;
  text-shadow: 1px 1px 1px #330086, 1px -1px 1px #330086, -1px 1px 1px #330086,
    -1px -1px 1px #330086;
`

export const FooterSortLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
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
