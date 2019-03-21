import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  TiStarFullOutline,
  TiStarOutline,
  TiArrowUpThick,
  TiArrowDownThick,
  TiRefresh,
} from 'react-icons/ti'

const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 50px;
  background: linear-gradient(to right, #11002c, #330086);
`

const Reset = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 32px;
  background: rgba(192, 192, 192, 0.12);
  text-decoration: none;
  font-weight: bold;
  :hover  {
    color: #f1f1f1;
  }
`

const FooterSortLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 25px;
  background: rgba(192, 192, 192, 0.12);
  text-decoration: none;
  font-weight: bold;
  :hover  {
    color: #f1f1f1;
  }
  &.active {
    background: transparent;
    color: #f1f1f1;
  }
`

const FooterNavBookmark = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 25px;
  background: rgba(192, 192, 192, 0.12);
  :hover  {
    color: #f1f1f1;
  }
  &.active {
    background: transparent;
    color: #f1f1f1;
  }
`

export default function Footer() {
  return (
    <FooterNav>
      <Reset
        onClick={
          window.location.pathname.includes('gaming')
            ? () => (window.location.href = '/gaming')
            : window.location.pathname.includes('editing')
            ? () => (window.location.href = '/editing')
            : window.location.pathname.includes('office')
            ? () => (window.location.href = '/office')
            : window.location.pathname.includes('bookmarks')
            ? () => (window.location.href = '/bookmarks')
            : () => (window.location.href = '/')
        }>
        <TiRefresh />
      </Reset>

      <FooterSortLink
        to={
          window.location.pathname === '/'
            ? '/ascending'
            : window.location.pathname === '/gaming'
            ? '/gaming/ascending'
            : window.location.pathname === '/editing'
            ? '/editing/ascending'
            : window.location.pathname === '/office'
            ? '/office/ascending'
            : window.location.pathname === '/descending'
            ? '/ascending'
            : window.location.pathname === '/gaming/descending'
            ? '/gaming/ascending'
            : window.location.pathname === '/editing/descending'
            ? '/editing/ascending'
            : window.location.pathname === '/office/descending'
            ? '/office/ascending'
            : window.location.pathname === '/bookmarks'
            ? '/bookmarks/ascending'
            : window.location.pathname === '/bookmarks/descending'
            ? '/bookmarks/ascending'
            : window.location.pathname
        }>
        €<TiArrowUpThick />
      </FooterSortLink>
      <FooterSortLink
        to={
          window.location.pathname === '/'
            ? '/descending'
            : window.location.pathname === '/gaming'
            ? '/gaming/descending'
            : window.location.pathname === '/editing'
            ? '/editing/descending'
            : window.location.pathname === '/office'
            ? '/office/descending'
            : window.location.pathname === '/ascending'
            ? '/descending'
            : window.location.pathname === '/gaming/ascending'
            ? '/gaming/descending'
            : window.location.pathname === '/editing/ascending'
            ? '/editing/descending'
            : window.location.pathname === '/office/ascending'
            ? '/office/descending'
            : window.location.pathname === '/bookmarks'
            ? '/bookmarks/descending'
            : window.location.pathname === '/bookmarks/ascending'
            ? '/bookmarks/descending'
            : window.location.pathname
        }>
        €<TiArrowDownThick />
      </FooterSortLink>

      <FooterNavBookmark to="/bookmarks">
        {window.location.pathname === '/bookmarks' ? (
          <TiStarFullOutline style={{ color: '#ffde00' }} />
        ) : window.location.pathname === '/bookmarks/ascending' ? (
          <TiStarFullOutline style={{ color: '#ffde00' }} />
        ) : window.location.pathname === '/bookmarks/descending' ? (
          <TiStarFullOutline style={{ color: '#ffde00' }} />
        ) : (
          <TiStarOutline />
        )}
      </FooterNavBookmark>
    </FooterNav>
  )
}

/*exact
        to={
          window.location.pathname.includes('gaming')
            ? '/gaming'
            : window.location.pathname.includes('editing')
            ? '/editing'
            : window.location.pathname.includes('office')
            ? '/office'
            : window.location.pathname === '/'
            ? '/'
            : '/'*/
