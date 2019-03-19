import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CardContainer from '../cards/CardContainer'
import GlobalStyle from './GlobalStyle'
import CardsRender from '../cards/CardsRender'
import CardsRenderBookmarks from '../cards/CardsRenderBookmarks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { getCardsFromStorage, saveCardsToStorage } from '../services'

const PageGrid = styled.div`
  max-width: 1025px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: grid;
  grid-template-rows: 100px auto 50px;
  position: absolute;
  height: 100%;
  width: 100%;
`

function App() {
  const [cards, setCards] = useState(getCardsFromStorage())

  useEffect(() => {
    saveCardsToStorage(cards)
  }, [cards])

  function calcTotal() {
    const cardsTotal = cards.map(card =>
      Object.assign(card, {
        total: card.parts
          .reduce((a, b) => a + b.partPrice, 0)
          .toLocaleString('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
      })
    )
    setCards(cardsTotal)
  }

  useEffect(() => {
    calcTotal()
  }, [])

  function bookmarkToggle(title) {
    const card = cards.find(pcbuild => pcbuild.title === title)
    const index = cards.indexOf(card)
    setCards([
      ...cards.slice(0, index),
      { ...card, bookmarked: !card.bookmarked },
      ...cards.slice(index + 1),
    ])
  }

  return (
    <Router>
      <PageGrid>
        <Header />
        <CardContainer>
          <Route
            exact
            path="/"
            render={() => (
              <CardsRender bookmarkToggle={bookmarkToggle} cards={cards} />
            )}
          />
          <Route
            exact
            path="/gaming"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.filter(card => card.category === 'gaming')}
              />
            )}
          />
          <Route
            exact
            path="/editing"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.filter(card => card.category === 'editing')}
              />
            )}
          />
          <Route
            exact
            path="/office"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.filter(card => card.category === 'office')}
              />
            )}
          />
          <Route
            exact
            path="/ascending"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.sort(
                  (a, b) => parseFloat(a.total) - parseFloat(b.total)
                )}
              />
            )}
          />
          <Route
            exact
            path="/gaming/ascending"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards
                  .filter(card => card.category === 'gaming')
                  .sort((a, b) => parseFloat(a.total) - parseFloat(b.total))}
              />
            )}
          />
          <Route
            exact
            path="/editing/ascending"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards
                  .filter(card => card.category === 'editing')
                  .sort((a, b) => parseFloat(a.total) - parseFloat(b.total))}
              />
            )}
          />
          <Route
            exact
            path="/office/ascending"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards
                  .filter(card => card.category === 'office')
                  .sort((a, b) => parseFloat(a.total) - parseFloat(b.total))}
              />
            )}
          />
          <Route
            exact
            path="/descending"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.sort(
                  (a, b) => parseFloat(b.total) - parseFloat(a.total)
                )}
              />
            )}
          />
          <Route
            exact
            path="/gaming/descending"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards
                  .filter(card => card.category === 'gaming')
                  .sort((a, b) => parseFloat(b.total) - parseFloat(a.total))}
              />
            )}
          />
          <Route
            exact
            path="/editing/descending"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards
                  .filter(card => card.category === 'editing')
                  .sort((a, b) => parseFloat(b.total) - parseFloat(a.total))}
              />
            )}
          />
          <Route
            exact
            path="/office/descending"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards
                  .filter(card => card.category === 'office')
                  .sort((a, b) => parseFloat(b.total) - parseFloat(a.total))}
              />
            )}
          />
          <Route
            exact
            path="/bookmarks"
            render={() => (
              <CardsRenderBookmarks
                bookmarkToggle={bookmarkToggle}
                cards={cards.filter(card => card.bookmarked)}
              />
            )}
          />
          <Route
            exact
            path="/bookmarks/ascending"
            render={() => (
              <CardsRenderBookmarks
                bookmarkToggle={bookmarkToggle}
                cards={cards
                  .filter(card => card.bookmarked)
                  .sort((a, b) => parseFloat(a.total) - parseFloat(b.total))}
              />
            )}
          />
          <Route
            exact
            path="/bookmarks/descending"
            render={() => (
              <CardsRenderBookmarks
                bookmarkToggle={bookmarkToggle}
                cards={cards
                  .filter(card => card.bookmarked)
                  .sort((a, b) => parseFloat(b.total) - parseFloat(a.total))}
              />
            )}
          />
        </CardContainer>
        <Footer />
        <GlobalStyle />
      </PageGrid>
    </Router>
  )
}

export default App
