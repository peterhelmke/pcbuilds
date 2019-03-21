import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  TiStarFullOutline,
  TiStarOutline,
  TiFlash,
  TiShoppingCart,
  TiChevronRight,
} from 'react-icons/ti'
import { uid } from 'react-uid'
import CardTitle from './CardTitle'
import SwipeableViews from 'react-swipeable-views'

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
  z-index: 1;
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
  color: #330086;
  :hover {
    color: #440086;
  }
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const CpuLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CpuGpu = styled.img`
  max-width: 45px;
  max-height: 45px;
  margin: 8px;
`

const PcBuildImage = styled.img`
  max-width: 210px;
  max-height: 210px;
`

const SwipeIndicatorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #afafaf;
  font-size: 32px;
  :hover {
    color: #5f5f5f;
  }
`

const KeyFacts = styled.section`
  margin-top: 15px;
  line-height: 1.5;
  height: 50px;
`

const PartListTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
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

const PcBuildTotalRow = styled.div`
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
  display: flex;
`

const PcBuildTotal = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  width: 150px;
  height: 30px;
  color: white;
  border: solid 1px;
  border-color: #330086;
  background: #330086;
  border-radius: 10px;
  :hover {
    border-color: #440086;
    background: #440086;
  }
`

const SwipeContainer = styled.div`
  min-height: 388px;
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
  const [index, setIndex] = useState(0)

  return (
    <StyledCard>
      <PcBuildTitleContainer>
        <CardTitle title={title} />
        <PerformanceIndicator
          style={
            performance >= 9
              ? { borderColor: '#330086', color: '#330086' }
              : performance >= 8
              ? { color: '#330086CC' }
              : performance >= 6
              ? { color: '#33008699' }
              : performance >= 4
              ? { color: '#33008666' }
              : { color: '#3300864D' }
          }>
          <TiFlash style={{ fontSize: '22px' }} />
          <strong> {performance} </strong>
        </PerformanceIndicator>
        <BookmarkStarContainer onClick={() => onBookmark(title)}>
          {bookmarked ? <TiStarFullOutline /> : <TiStarOutline />}
        </BookmarkStarContainer>
      </PcBuildTitleContainer>
      <SwipeableViews index={index} onChangeIndex={() => setIndex(0)}>
        <SwipeContainer>
          <PcBuildSubtitleContainer>
            <CategoryTag>{category} </CategoryTag>
            <PcBuildSubtitle>{subtitle}</PcBuildSubtitle>
          </PcBuildSubtitleContainer>
          <PcBuildImageContainer>
            <CpuLogoContainer>
              {parts[0].partManufacturer === 'Intel' ? (
                <CpuGpu src="../images/intel.svg" />
              ) : (
                <CpuGpu src="../images/amd.svg" />
              )}
              {parts[1].partName.toUpperCase().includes('GEFORCE') ? (
                <CpuGpu src="../images/nvidia.svg" />
              ) : (
                ''
              )}
              {parts[1].partName.toUpperCase().includes('RADEON') ? (
                <CpuGpu src="../images/radeon.svg" />
              ) : (
                ''
              )}
            </CpuLogoContainer>
            <PcBuildImage src={image} />
            <SwipeIndicatorContainer>
              <TiChevronRight onClick={() => setIndex(1)} />
            </SwipeIndicatorContainer>
          </PcBuildImageContainer>
          <KeyFacts>{keyFacts}</KeyFacts>
        </SwipeContainer>
        <SwipeContainer>
          <PartListTitle>Part List</PartListTitle>
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
        </SwipeContainer>
      </SwipeableViews>
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
            <TiShoppingCart />
            &nbsp;
            <strong>Total</strong>
            &nbsp;
            {total}€
          </PcBuildTotal>
        </form>
      </PcBuildTotalRow>
    </StyledCard>
  )
}
