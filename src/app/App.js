import React, { useState, useEffect } from 'react'
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
      image: '../images/phanteksp300tgbk.jpg',
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
      category: 'gaming',
      bookmarked: false,
    },

    {
      title: 'AMD Workstation Build',
      subtitle: 'Edit like a Pro!',
      image: '../images/fractaldesignmeshifyctg.jpg',
      keyFacts: 'Edit edit edit edit edit',
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
      category: 'editing',
      bookmarked: false,
    },

    {
      title: 'Office PC',
      subtitle: 'Bargain Build',
      image: '../images/CoolerMasterMasterBoxE300L.jpg',
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
      category: 'office',
      bookmarked: false,
    },

    {
      title: 'Lian Li Gaming Build',
      subtitle: 'Lian Li Placeholder',
      image: '../images/lianlipco11dxbk.jpg',
      keyFacts: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
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
          partManufacturer: 'Lian Li',
          partName: 'PC-O11DX Dynamic',
          partPrice: 130.06,
          partUrl: 'https://amzn.to/2HC2mCB',
          partAsin: 'asin.B07C88X1VV',
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
      category: 'gaming',
      bookmarked: false,
    },

    {
      title: 'Q300L Cheap Gaming Build',
      subtitle: 'Cooler Master Placeholder',
      image: '../images/coolermasterq300l.jpg',
      keyFacts: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
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
          partName: 'MasterBox Q300L',
          partPrice: 49.93,
          partUrl: 'https://amzn.to/2Fcc9wh',
          partAsin: 'asin.B0785GRMPG',
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
      category: 'gaming',
      bookmarked: false,
    },
    {
      title: 'NZXT Workstation Build',
      subtitle: 'H700i Placeholder',
      image: '../images/nzxth700iw.jpg',
      keyFacts: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
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
          partManufacturer: 'NZXT',
          partName: 'H700i White',
          partPrice: 199.9,
          partUrl: 'https://amzn.to/2Te0stY',
          partAsin: 'asin.B076JG8Z6N',
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
      category: 'editing',
      bookmarked: false,
    },
  ])

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
              <CardsRender
                bookmarkToggle={bookmarkToggle}
                cards={cards.filter(card => card.bookmarked)}
              />
            )}
          />
          <Route
            exact
            path="/bookmarks/ascending"
            render={() => (
              <CardsRender
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
              <CardsRender
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
