import React, { useState } from 'react'
import styled from 'styled-components'
import CardContainer from '../cards/CardContainer'
import GlobalStyle from './GlobalStyle'
import CardsRender from '../cards/CardsRender'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'

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
  const [cards, setCards] = useState([
    {
      title: 'Apex Gaming Build',
      subtitle: 'Featured Build',
      image: 'images/phanteksp300tgbk.jpg',
      keyFacts:
        'A build capable of all modern titles up to WQHD-resolution and simultanous streaming.',
      parts: [
        {
          partManufacturer: 'AMD',
          partName: 'Ryzen 5 2600X',
          partPrice: 196.89,
          partUrl: 'https://amzn.to/2EXQxDI',
          partAsin: 'asin.B07B428V2L',
        },
        {
          partManufacturer: 'MSI',
          partName: 'GeForce RTX 2060 6GB Ventus OC',
          partPrice: 374.99,
          partUrl: 'https://amzn.to/2Tzb5gc',
          partAsin: 'asin.B07MJC8XKD',
        },
        {
          partManufacturer: 'Phanteks',
          partName: 'Eclipse P300 Tempered Glass',
          partPrice: 62.94,
          partUrl: 'https://amzn.to/2Cgb4TO',
          partAsin: 'asin.B075DMYVBV',
        },
        {
          partManufacturer: 'Ballistix',
          partName: 'Sport LT BLS2K8G4D30BESBK 16GB (8GB x2)',
          partPrice: 100.68,
          partUrl: 'https://amzn.to/2TBcmmL',
          partAsin: 'asin.B07HP87R9J',
        },
        {
          partManufacturer: 'ASRock',
          partName: 'B450 Pro4',
          partPrice: 82.99,
          partUrl: 'https://amzn.to/2CdKz0X',
          partAsin: 'asin.B07FVYKJHR',
        },
        {
          partManufacturer: 'Cooler Master',
          partName: 'Hyper 212 Black',
          partPrice: 34.94,
          partUrl: 'https://amzn.to/2Cg215a',
          partAsin: 'asin.B07H9HJLG5',
        },
        {
          partManufacturer: 'SanDisk',
          partName: 'SSD PLUS 1TB',
          partPrice: 112.9,
          partUrl: 'https://amzn.to/2XWlFMB',
          partAsin: 'asin.B07D998212',
        },
        {
          partManufacturer: 'Corsair',
          partName: 'TXM Gold 550W 80+ Gold',
          partPrice: 77.99,
          partUrl: 'https://amzn.to/2O1rxjf',
          partAsin: 'asin.B06WV7Z1ZW',
        },
      ],
      total: 2,
      category: 'gaming',
      bookmarked: false,
    },

    {
      title: 'AMD Workstation Build',
      subtitle: 'Edit like a Pro!',
      image: 'images/fractaldesignmeshifyctg.jpg',
      keyFacts: 'Commander Eilo am Start!',
      parts: [
        {
          partManufacturer: 'AMD',
          partName: 'Ryzen 5 2600X',
          partPrice: 196.89,
          partUrl: 'https://amzn.to/2EXQxDI',
          partAsin: 'asin.B07B428V2L',
        },
        {
          partManufacturer: 'MSI',
          partName: 'GeForce RTX 2060 6GB Ventus OC',
          partPrice: 374.99,
          partUrl: 'https://amzn.to/2Tzb5gc',
          partAsin: 'asin.B07MJC8XKD',
        },
        {
          partManufacturer: 'Fractal Design',
          partName: 'Meshify C Tempered Glass',
          partPrice: 92.58,
          partUrl: 'https://amzn.to/2Tx4Edz',
          partAsin: 'asin.B079FQZM89',
        },
        {
          partManufacturer: 'Ballistix',
          partName: 'Sport LT BLS2K8G4D30BESBK 16GB (8GB x2)',
          partPrice: 100.68,
          partUrl: 'https://amzn.to/2TBcmmL',
          partAsin: 'asin.B07HP87R9J',
        },
        {
          partManufacturer: 'ASRock',
          partName: 'B450 Pro4',
          partPrice: 82.99,
          partUrl: 'https://amzn.to/2CdKz0X',
          partAsin: 'asin.B07FVYKJHR',
        },
        {
          partManufacturer: 'Cooler Master',
          partName: 'Hyper 212 Black',
          partPrice: 34.94,
          partUrl: 'https://amzn.to/2Cg215a',
          partAsin: 'asin.B07H9HJLG5',
        },
        {
          partManufacturer: 'SanDisk',
          partName: 'SSD PLUS 1TB',
          partPrice: 112.9,
          partUrl: 'https://amzn.to/2XWlFMB',
          partAsin: 'asin.B07D998212',
        },
        {
          partManufacturer: 'Corsair',
          partName: 'TXM Gold 550W 80+ Gold',
          partPrice: 77.99,
          partUrl: 'https://amzn.to/2O1rxjf',
          partAsin: 'asin.B06WV7Z1ZW',
        },
      ],
      total: 3,
      category: 'editing',
      bookmarked: false,
    },

    {
      title: 'Office PC',
      subtitle: 'Bargain Build',
      image: 'images/CoolerMasterMasterBoxE300L.jpg',
      keyFacts: 'Office SWAG',
      parts: [
        {
          partManufacturer: 'AMD',
          partName: 'Ryzen 5 2600X',
          partPrice: 196.89,
          partUrl: 'https://amzn.to/2EXQxDI',
          partAsin: 'asin.B07B428V2L',
        },
        {
          partManufacturer: 'MSI',
          partName: 'GeForce RTX 2060 6GB Ventus OC',
          partPrice: 374.99,
          partUrl: 'https://amzn.to/2Tzb5gc',
          partAsin: 'asin.B07MJC8XKD',
        },
        {
          partManufacturer: 'Cooler Master',
          partName: 'Master Box E300L',
          partPrice: 34.99,
          partUrl: 'https://amzn.to/2TyB3QR',
          partAsin: 'asin.B07C2KNP2Q',
        },
        {
          partManufacturer: 'Ballistix',
          partName: 'Sport LT BLS2K8G4D30BESBK 16GB (8GB x2)',
          partPrice: 100.68,
          partUrl: 'https://amzn.to/2TBcmmL',
          partAsin: 'asin.B07HP87R9J',
        },
        {
          partManufacturer: 'ASRock',
          partName: 'B450 Pro4',
          partPrice: 82.99,
          partUrl: 'https://amzn.to/2CdKz0X',
          partAsin: 'asin.B07FVYKJHR',
        },
        {
          partManufacturer: 'Cooler Master',
          partName: 'Hyper 212 Black',
          partPrice: 34.94,
          partUrl: 'https://amzn.to/2Cg215a',
          partAsin: 'asin.B07H9HJLG5',
        },
        {
          partManufacturer: 'SanDisk',
          partName: 'SSD PLUS 1TB',
          partPrice: 112.9,
          partUrl: 'https://amzn.to/2XWlFMB',
          partAsin: 'asin.B07D998212',
        },
        {
          partManufacturer: 'Corsair',
          partName: 'TXM Gold 550W 80+ Gold',
          partPrice: 77.99,
          partUrl: 'https://amzn.to/2O1rxjf',
          partAsin: 'asin.B06WV7Z1ZW',
        },
      ],
      total: 1,
      category: 'office',
      bookmarked: false,
    },
  ])

  function bookmarkToggle(id) {
    const card = cards.find(pcbuild => pcbuild.id === id)
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
            path="/gaming"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.filter(card => card.category === 'gaming')}
              />
            )}
          />
          <Route
            path="/editing"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.filter(card => card.category === 'editing')}
              />
            )}
          />
          <Route
            path="/office"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.filter(card => card.category === 'office')}
              />
            )}
          />
          <Route
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
            path="/bookmarks"
            render={() => (
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.filter(card => card.bookmarked)}
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
