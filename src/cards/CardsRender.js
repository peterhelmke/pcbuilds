import Card from './Card'
import React from 'react'

export default function CardsRender ({cards, bookmarkToggle}) {

    return (<React.Fragment>
                {cards.map(card => (
                    <Card
                        key={card.title}
                        title={card.title}
                        onBookmark={bookmarkToggle}
                        subtitle={card.subtitle}
                        image={card.image}
                        manufactureritem1={card.manufactureritem1}
                        item1={card.item1}
                        manufactureritem2={card.manufactureritem2}
                        item2={card.item2}
                        manufactureritem3={card.manufactureritem3}
                        item3={card.item3}
                        manufactureritem4={card.manufactureritem4}
                        item4={card.item4}
                        total={card.total}
                        bookmarked={card.bookmarked}
                    />))}
            </React.Fragment>)
}