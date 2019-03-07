import React, { useState } from 'react'
import styled from 'styled-components'
import CardContainer from '../cards/CardContainer'
import GlobalStyle from './GlobalStyle'
import CardsRender from '../cards/CardsRender'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { FaStar, FaFilter, FaSort } from 'react-icons/fa'

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

const StyledHeader = styled.header`
  display:grid;
  grid-template-rows: 50px 50px;
  background: linear-gradient(to right, #11002C, #330086);
`

const HeaderTitleContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`
const HeaderTitleWhite = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  color: #F1F1F1;
`

const HeaderTitleYellow = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  color: #FFDE00;
`

const HeaderCategoryNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`

const HeaderCategoryLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: 'Oswald', sans-serif;
  text-decoration: none;
  color: rgba(255,255,255,0.5);
  background: rgba(192,192,192,0.12);
  &.active {
    background: transparent;
    color: #F1F1F1;
  }
`

const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
  background: linear-gradient(to right, #11002C, #330086);
`

const FooterNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255,255,255,0.5);
  font-size: 22px;
`

const FooterNavBookmark = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255,255,255,0.5);
  font-size: 25px;
  &.active {
    color: #F1F1F1;
  }
`

function App() {
  const [cards, setCards] = useState([
    {title: 'Apex Gaming Build',
    subtitle: 'Featured Build',
    image: 'images/phanteksp300tgbk.jpg',
    manufactureritem1: 'AMD',
    item1: 'Ryzen 5 2600X',
    manufactureritem2: 'nvidia',
    item2: 'GeForce RTX 2060',
    manufactureritem3: 'Phanteks',
    item3: 'Eclipse P300 Tempered Glass',
    manufactureritem4: 'GeIL',
    item4: 'EVO SPEAR 16 GB (2 x 8 GB)',
    total: '943.32',
    category: 'gaming',
    bookmarked: false},

    {title: 'AMD Workstation Build',
    subtitle: 'Edit like a Pro',
    image: 'images/fractaldesignmeshifyctg.jpg',
    manufactureritem1: 'AMD',
    item1: 'Ryzen 7 2700',
    manufactureritem2: 'AMD',
    item2: 'Radeon Pro WX 8200',
    manufactureritem3: 'Fractal Design',
    item3: 'Meshify C Tempred Glass',
    manufactureritem4: 'G.Skill',
    item4: 'Aegis 32 GB (4 x 8 GB)',
    total: '1677.43',
    category: 'editing',
    bookmarked: false},

    {title: 'Budget Office Build',
    subtitle: 'Bargain Build',
    image: 'images/CoolerMasterMasterBoxE300L.jpg',
    manufactureritem1: 'AMD',
    item1: 'Athlon 200GE',
    manufactureritem2: 'TCSunBow',
    item2: 'X3 480 GB',
    manufactureritem3: 'Cooler Master',
    item3: 'MasterBox E300L',
    manufactureritem4: 'G.Skill',
    item4: 'Ripjaws V Series 8 GB (2 x 4 GB)',
    total: '277.85',
    category: 'office',
    bookmarked: false},
  ])

  function bookmarkToggle(title) {
    const card = cards.find(pcbuild => pcbuild.title === title)
    const index = cards.indexOf(card)
    setCards([...cards.slice(0, index), {...card, bookmarked: !card.bookmarked}, ...cards.slice(index + 1)])
  }

  return (
<Router>
  <PageGrid>
    <StyledHeader>
      <HeaderTitleContainer exact to="/">
        <HeaderTitleWhite>build</HeaderTitleWhite>
        <HeaderTitleYellow>IT</HeaderTitleYellow>
      </HeaderTitleContainer>
      <HeaderCategoryNav>
        <HeaderCategoryLink exact to="/">All</HeaderCategoryLink>
        <HeaderCategoryLink to="/gaming">Gaming</HeaderCategoryLink>
        <HeaderCategoryLink to="/editing">Editing</HeaderCategoryLink>
        <HeaderCategoryLink to="/office">Office</HeaderCategoryLink>
      </HeaderCategoryNav>
    </StyledHeader>
    <CardContainer>
      <Route
        exact path="/"
        render={() => ( <CardsRender cards={cards} bookmarkToggle={bookmarkToggle} />)}
      />
      <Route
        path="/gaming"
        render={() => (
          <CardsRender 
            bookmarkToggle={bookmarkToggle} 
            cards={cards.filter(card => card.category === 'gaming')} />
        )}
      />
      <Route
        path="/editing"
        render={() => (
          <CardsRender 
            bookmarkToggle={bookmarkToggle} 
            cards={cards.filter(card => card.category === 'editing')} />
        )}
      />
      <Route
        path="/office"
        render={() => (
          <CardsRender 
            bookmarkToggle={bookmarkToggle} 
            cards={cards.filter(card => card.category === 'office')} />
        )}
      />
      <Route
        path="/bookmarks"
        render={() => (
          <CardsRender 
            bookmarkToggle={bookmarkToggle} 
            cards={cards.filter(card => card.bookmarked)} />
        )}
      />
    </CardContainer>
    <FooterNav>
      <FooterNavLink to="/"><FaSort /></FooterNavLink>
      <FooterNavLink to="/"><FaFilter /></FooterNavLink>
      <FooterNavBookmark to="/bookmarks"><FaStar /></FooterNavBookmark>
    </FooterNav>
    <GlobalStyle />
  </PageGrid>
</Router>
  )
}

export default App