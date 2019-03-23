import { NavLink } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { TiSocialInstagram, TiSocialYoutube } from 'react-icons/ti'

const StyledHeader = styled.header`
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 50px 50px;
  background: linear-gradient(to right, #11002c, #330086);
`

const HeaderTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const HeaderTitleWrapper = styled.div`
  display: flex;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  align-items: center;
  justify-content: center;
`

const HeaderTitleWhite = styled.div`
  cursor: pointer;
  color: white;
`

const HeaderTitleYellow = styled.div`
  cursor: pointer;
  color: #ffde00;
`

const SocialMedia = styled.div`
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

const HeaderCategoryNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  transition: all 0.3s ease-in;
  :hover  {
    color: white;
  }
  &.active {
    background: transparent;
    color: white;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <HeaderTitleContainer>
        <div />
        <HeaderTitleWrapper>
          <HeaderTitleWhite onClick={() => (window.location.href = '/')}>
            build
          </HeaderTitleWhite>
          <HeaderTitleYellow onClick={() => (window.location.href = '/')}>
            IT
          </HeaderTitleYellow>
        </HeaderTitleWrapper>
        <SocialMedia>
          <a
            href="https://www.youtube.com/channel/UCAgEf4P53ezEZ2-RTlK1drg"
            target="_blank"
            rel="noopener noreferrer">
            <TiSocialYoutube style={{ cursor: 'pointer' }} />
          </a>
          <a
            href="https://www.instagram.com/sirtechalot"
            target="_blank"
            rel="noopener noreferrer">
            <TiSocialInstagram
              style={{ marginLeft: '15px', cursor: 'pointer' }}
            />
          </a>
        </SocialMedia>
      </HeaderTitleContainer>
      <HeaderCategoryNav>
        <HeaderCategoryLink
          exact
          to={
            window.location.pathname === '/ascending'
              ? '/ascending'
              : window.location.pathname === '/descending'
              ? '/descending'
              : '/'
          }>
          All
        </HeaderCategoryLink>
        <HeaderCategoryLink to="/gaming">Gaming</HeaderCategoryLink>
        <HeaderCategoryLink to="/editing">Editing</HeaderCategoryLink>
        <HeaderCategoryLink to="/office">Office</HeaderCategoryLink>
      </HeaderCategoryNav>
    </StyledHeader>
  )
}
