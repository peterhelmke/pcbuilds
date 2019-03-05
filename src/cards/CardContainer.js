import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardSection = styled.section`
  display: grid;
  background: #F5F5F5;
  align-content: flex-start;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
`

export default function CardContainer() {

  return (
    <CardSection>
      <Card/>
      <Card/>
      <Card/>
    </CardSection>
  )
} 
