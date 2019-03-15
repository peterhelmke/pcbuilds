import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'
import { uid } from 'react-uid'
import CardTitle from './CardTitle'

const StyledCard = styled.section`
  padding: 0 25px 25px 25px;
  min-width: 325px;
  height: 830px;
  background: linear-gradient(to bottom, #ffffff, #ffffff, #fbfbfb);
  border-bottom: solid 1px;
  border-color: #f1f1f1;
  scroll-snap-align: start;
`

const PcBuildTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  position: sticky;
  top: 0;
  margin: 0 -25px 0 -25px;
  padding: 15px 25px 15px 25px;
  background: #ffffff;
`

const BookmarkStarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 25px;
  cursor: pointer;
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

const PartListTitle = styled.h3`
  margin: 15px 0 0 0;
  font-size: 18px;
  font-weight: bold;
`

const Part = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: auto 65px;
  grid-template-rows: 30px;
  font-size: 14px;
  align-items: center;
  border-bottom: solid 1px;
  border-color: #f1f1f1;
`

const PartPrice = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 65px;
  font-size: 14px;
  background: transparent;
  color: #330086;
  border: solid 1px;
  border-color: #330086;
  border-radius: 3px;
  :hover {
    background: #330086;
    color: #f1f1f1;
  }
`

const PartPriceLink = styled.a`
  text-decoration: none;
`

const PcBuildTotalRow = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`

const PcBuildTotal = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background: #330086;
  width: 130px;
  height: 30px;
  color: #f1f1f1;
  border: solid 1px;
  border-radius: 3px;
  :hover {
    background: transparent;
    color: #330086;
    border-color: #330086;
  }
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
  total: PropTypes.func,
}

Card.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  image: 'http://via.placeholder.com/325x210/',
  keyFacts: 'Key Facts',
}

export default function Card({
  title,
  bookmarked,
  onBookmark,
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
        <BookmarkStarContainer onClick={() => onBookmark(title)}>
          {bookmarked ? (
            <TiStarFullOutline color="#330086" />
          ) : (
            <TiStarOutline color="#330086" />
          )}
        </BookmarkStarContainer>
      </PcBuildTitleContainer>
      <PcBuildSubtitle>{subtitle}</PcBuildSubtitle>
      <PcBuildImageContainer>
        <PcBuildImage src={image} />
      </PcBuildImageContainer>
      <KeyFacts>{keyFacts}</KeyFacts>
      <PartListTitle>Partlist</PartListTitle>
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
              {part.partPrice.toFixed(2).toLocaleString('de-DE')}€
            </PartPrice>
          </PartPriceLink>
        </Part>
      ))}
      <PcBuildTotalRow>
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
            <strong>Total</strong>
            &nbsp;
            {total()}€
          </PcBuildTotal>
        </form>
      </PcBuildTotalRow>
    </StyledCard>
  )
}

/* {parts
.reduce((a, b) => a + b.partPrice, 0)
.toFixed(2)
.toLocaleString('de-DE')} */
