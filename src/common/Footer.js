import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaStar, FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'

const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
  background: linear-gradient(to right, #11002c, #330086);
`

const FooterNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 25px;
  background: rgba(192, 192, 192, 0.12);
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
  &.active {
    background: transparent;
    color: #f1f1f1;
  }
`

export default function Footer() {
  return (
    <FooterNav>
      <FooterNavLink to="/ascending">
        <FaChevronCircleUp />
      </FooterNavLink>
      <FooterNavLink to="/descending">
        <FaChevronCircleDown />
      </FooterNavLink>
      <FooterNavBookmark to="/bookmarks">
        <FaStar />
      </FooterNavBookmark>
    </FooterNav>
  )
}
