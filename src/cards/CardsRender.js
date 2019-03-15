import Card from './Card'
import React from 'react'
import { uid } from 'react-uid'

export default function CardsRender({ cards, bookmarkToggle }) {
  return (
    <React.Fragment>
      {cards.map(card => (
        <Card
          key={uid(card)}
          title={card.title}
          onBookmark={bookmarkToggle}
          subtitle={card.subtitle}
          image={card.image}
          keyFacts={card.keyFacts}
          parts={card.parts}
          bookmarked={card.bookmarked}
          total={card.total}
        />
      ))}
    </React.Fragment>
  )
}
