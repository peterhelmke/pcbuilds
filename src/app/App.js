import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CardContainer from '../cards/CardContainer'
import GlobalStyle from './GlobalStyle'
import CardsRender from '../cards/CardsRender'
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

  function calcTotalString() {
    const cardsTotalString = cards.map(card =>
      Object.assign(card, {
        total: card.parts
          .reduce((a, b) => a + b.partPrice, 0)
          .toLocaleString('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
      })
    )
    setCards(cardsTotalString)
  }

  function calcTotalNumber() {
    cards.map(card =>
      Object.assign(card, {
        totalNumber: card.parts.reduce((a, b) => a + b.partPrice, 0),
      })
    )
  }

  useEffect(() => {
    calcTotalString()
    calcTotalNumber()
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

  function countBookmarked() {
    const bookmarkedCards = cards.filter(card => card.bookmarked === true)
    return bookmarkedCards.length === 0 ? '' : bookmarkedCards.length
  }

  function filterCardsCategory(category) {
    return cards.filter(card => card.category === category)
  }

  function allCardsAscending() {
    return cards.sort(
      (a, b) => parseFloat(a.totalNumber) - parseFloat(b.totalNumber)
    )
  }

  function categoryCardsAscending(category) {
    return cards
      .filter(card => card.category === category)
      .sort((a, b) => parseFloat(a.totalNumber) - parseFloat(b.totalNumber))
  }

  function allCardsDescending() {
    return cards.sort(
      (a, b) => parseFloat(b.totalNumber) - parseFloat(a.totalNumber)
    )
  }

  function categoryCardsDescending(category) {
    return cards
      .filter(card => card.category === category)
      .sort((a, b) => parseFloat(b.totalNumber) - parseFloat(a.totalNumber))
  }

  return (
    <Router>
      <PageGrid>
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender bookmarkToggle={bookmarkToggle} cards={cards} />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/gaming"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={filterCardsCategory('gaming')}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/editing"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={filterCardsCategory('editing')}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/office"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={filterCardsCategory('office')}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/ascending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={allCardsAscending()}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/gaming/ascending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={categoryCardsAscending('gaming')}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/editing/ascending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={categoryCardsAscending('editing')}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/office/ascending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={categoryCardsAscending('office')}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/descending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={allCardsDescending()}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/gaming/descending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={categoryCardsDescending('gaming')}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/editing/descending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={categoryCardsDescending('editing')}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/office/descending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={categoryCardsDescending('office')}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/bookmarks"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={cards.filter(card => card.bookmarked)}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/bookmarks/ascending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={cards
                    .filter(card => card.bookmarked)
                    .sort(
                      (a, b) =>
                        parseFloat(a.totalNumber) - parseFloat(b.totalNumber)
                    )}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/bookmarks/descending"
          render={() => (
            <React.Fragment>
              <CardContainer>
                <CardsRender
                  bookmarkToggle={bookmarkToggle}
                  cards={cards
                    .filter(card => card.bookmarked)
                    .sort(
                      (a, b) =>
                        parseFloat(b.totalNumber) - parseFloat(a.totalNumber)
                    )}
                />
              </CardContainer>
            </React.Fragment>
          )}
        />
        <Footer countBookmarked={countBookmarked} />
        <GlobalStyle />
      </PageGrid>
    </Router>
  )
}
export default App
