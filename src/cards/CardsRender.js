import Card from './Card'
import React from 'react'
import { uid } from 'react-uid'
import styled from 'styled-components'
import { TiStarOutline } from 'react-icons/ti'

const BookmarksPlaceholder = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 18px;
  color: #afafaf;
  align-items: center;
  justify-content: center;
`

export default function CardsRender({ cards, bookmarkToggle }) {
  return (
    <React.Fragment>
      {window.location.pathname.includes('bookmarks') ? (
        <BookmarksPlaceholder>
          Space for your favourite Builds <TiStarOutline />
        </BookmarksPlaceholder>
      ) : (
        ''
      )}
      {cards.map(card => (
        <Card
          key={uid(card)}
          title={card.title}
          performance={card.performance}
          bookmarked={card.bookmarked}
          onBookmark={bookmarkToggle}
          category={card.category}
          subtitle={card.subtitle}
          image={card.image}
          keyFacts={card.keyFacts}
          parts={card.parts}
          total={card.total}
        />
      ))}
    </React.Fragment>
  )
}
