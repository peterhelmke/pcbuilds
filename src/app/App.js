import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import CardContainer from '../cards/CardContainer'
import Footer from '../common/Footer'
import GlobalStyle from './GlobalStyle'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

function App() {

  return (
    <PageGrid>
      <Header/>
      <CardContainer/>
      <Footer/>
      <GlobalStyle/>
    </PageGrid>
  )
}

export default App
