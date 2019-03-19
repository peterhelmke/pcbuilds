import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  TiStarFullOutline,
  TiStarOutline,
  TiFlash,
  TiShoppingCart,
} from 'react-icons/ti'
import { uid } from 'react-uid'
import CardTitle from './CardTitle'

const StyledCard = styled.section`
  padding: 0 25px 25px 25px;
  background: linear-gradient(to bottom, #ffffff, #ffffff, #fbfbfb);
  min-width: 280px;
  border-bottom: solid 1px;
  border-color: #f1f1f1;
  scroll-snap-align: start;
  border-radius: 0 0 25px 25px;
`

const PcBuildTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  position: sticky;
  top: 0;
  margin: 0 -25px 0 -25px;
  padding: 15px 25px 15px 25px;
  background: #ffffff;
  border-radius: 0 0 25px 25px;
`
const PerformanceIndicator = styled.div`
  display: flex;
  min-width: 40px;
  padding-right: 5px;
  align-items: center;
  height: 27px;
  color: crimson;
  border: solid 1px;
  border-color: transparent;
  border-radius: 10px;
  margin-right: 10px;
`

const BookmarkStarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 25px;
  cursor: pointer;
`

const PcBuildSubtitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

const CategoryTag = styled.div`
  display: flex;
  margin: 5px 5px 5px 0;
  height: 27px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background: #330086;
  color: white;
  border-radius: 10px;
`

const PcBuildSubtitle = styled.h3`
  margin: 10px 0 0 0;
  font-size: 16px;
  font-weight: lighter;
`

const PcBuildImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const PcBuildImage = styled.img`
  max-width: 325px;
  max-height: 210px;
`

const KeyFacts = styled.section`
  scroll-snap-align: start;
  margin-top: 15px;
  line-height: 1.5;
  height: 50px;
`

const PcBuildTotalRow = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 30px;
`

const PartList = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`

const PcBuildTotal = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: #29b27b;
  width: 140px;
  height: 27px;
  color: white;
  border: solid 1px;
  border-color: #29b27b;
  border-radius: 10px;
  :hover {
    border-color: #330086;
    background: #330086;
    color: #f1f1f1;
  }
`

const Part = styled.div`
  display: grid;
  grid-gap: 5px;
  margin-top: 10px;
  grid-template-columns: auto 70px;
  grid-template-rows: 30px;
  font-size: 14px;
  align-items: center;
  border-bottom: solid 1px;
  border-color: #f1f1f1;
  background: linear-gradient(to bottom, #ffffff, #fbfbfb);
`

const PartPrice = styled.button`
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27px;
  width: 70px;
  font-size: 14px;
  background: transparent;
  color: #330086;
  border: solid 1px;
  border-color: #330086;
  border-radius: 10px;
  :hover {
    background: #330086;
    color: #f1f1f1;
  }
`

const PartPriceLink = styled.a`
  text-decoration: none;
`

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  keyFacts: PropTypes.string,
  image: PropTypes.string,
  parts: PropTypes.array,
  category: PropTypes.string,
  bookmarked: PropTypes.bool,
  onBookmark: PropTypes.func,
}

Card.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  image: 'http://via.placeholder.com/325x210/',
  keyFacts: 'Key Facts',
}

export default function Card({
  title,
  performance,
  bookmarked,
  onBookmark,
  category,
  subtitle,
  image,
  keyFacts,
  parts,
  total,
}) {
  return (
    <StyledCard>
      <PcBuildTitleContainer>
        <CardTitle title={title} />
        <PerformanceIndicator
          style={
            performance >= 8
              ? { borderColor: 'crimson', color: 'crimson' }
              : { color: '#330086' } && performance <= 4
              ? { color: '#afafaf' }
              : { color: '#330086' }
          }>
          <TiFlash style={{ fontSize: '22px' }} />
          <strong> {performance} </strong>
        </PerformanceIndicator>
        <BookmarkStarContainer onClick={() => onBookmark(title)}>
          {bookmarked ? (
            <TiStarFullOutline color="#330086" />
          ) : (
            <TiStarOutline color="#330086" />
          )}
        </BookmarkStarContainer>
      </PcBuildTitleContainer>
      <PcBuildSubtitleContainer>
        <CategoryTag>{category} </CategoryTag>
        <PcBuildSubtitle>{subtitle}</PcBuildSubtitle>
      </PcBuildSubtitleContainer>
      <PcBuildImageContainer>
        <PcBuildImage src={image} />
      </PcBuildImageContainer>
      <KeyFacts>{keyFacts}</KeyFacts>
      <PcBuildTotalRow>
        <PartList>Part List</PartList>
        <form
          action="http://www.amazon.de/exec/obidos/dt/assoc/handle-buy-box"
          method="POST"
          target="_blank"
          rel="noreferrer noopener">
          <input type="hidden" name="tag_value" value="sirtechalot-21" />
          {parts.map(part => (
            <input
              key={uid(part)}
              type="hidden"
              name={part.partAsin}
              value="1"
            />
          ))}

          <PcBuildTotal type="submit" name="submit.add-to-cart">
            <TiShoppingCart />
            &nbsp;
            <strong>Total</strong>
            &nbsp;
            {total}€
          </PcBuildTotal>
        </form>
      </PcBuildTotalRow>
      {parts.map(part => (
        <Part key={uid(part)}>
          <div>
            <strong>{part.partManufacturer}</strong> {part.partName}
          </div>
          <PartPriceLink
            href={part.partUrl}
            target="_blank"
            rel="noreferrer noopener">
            <PartPrice>
              {part.partPrice.toLocaleString('de-DE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              €
            </PartPrice>
          </PartPriceLink>
        </Part>
      ))}
    </StyledCard>
  )
}
