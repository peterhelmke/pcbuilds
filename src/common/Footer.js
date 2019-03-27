import React from 'react'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import {
  StyledFooter,
  FooterNavBookmark,
  BookmarkCounter,
  FooterSortLink,
} from './FooterStyles'

export default function Footer({ countBookmarked }) {
  return (
    <StyledFooter>
      <FooterNavBookmark
        to={
          window.location.pathname.includes('bookmarks') ? '/' : '/bookmarks'
        }>
        {window.location.pathname === '/bookmarks' ? (
          <TiStarFullOutline style={{ color: '#ffde00' }} />
        ) : window.location.pathname === '/bookmarks/ascending' ? (
          <TiStarFullOutline style={{ color: '#ffde00' }} />
        ) : window.location.pathname === '/bookmarks/descending' ? (
          <TiStarFullOutline style={{ color: '#ffde00' }} />
        ) : (
          <TiStarOutline />
        )}
        <BookmarkCounter>{countBookmarked()}</BookmarkCounter>
      </FooterNavBookmark>

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
            : window.location.pathname === '/gaming/ascending'
            ? '/gaming'
            : window.location.pathname === '/editing/ascending'
            ? '/editing'
            : window.location.pathname === '/office/ascending'
            ? '/office'
            : window.location.pathname === '/bookmarks/ascending'
            ? '/bookmarks'
            : '/'
        }>
        <FaSortAmountUp />
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
            : window.location.pathname === '/gaming/descending'
            ? '/gaming'
            : window.location.pathname === '/editing/descending'
            ? '/editing'
            : window.location.pathname === '/office/descending'
            ? '/office'
            : window.location.pathname === '/bookmarks/descending'
            ? '/bookmarks'
            : '/'
        }>
        <FaSortAmountDown />
      </FooterSortLink>
    </StyledFooter>
  )
}
