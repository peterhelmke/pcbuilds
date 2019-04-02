import React from 'react'
import { TiSocialInstagram, TiSocialYoutube } from 'react-icons/ti'
import {
  StyledHeader,
  StyledHeaderGrid,
  HeaderTitleContainer,
  HeaderTitleWrapper,
  HeaderTitleWhite,
  HeaderTitleYellow,
  SocialMedia,
  HeaderCategoryNav,
  HeaderCategoryLink,
} from './HeaderStyles'

export default function Header() {
  return (
    <StyledHeader>
      <div />
      <StyledHeaderGrid>
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
      </StyledHeaderGrid>
      <div />
    </StyledHeader>
  )
}
