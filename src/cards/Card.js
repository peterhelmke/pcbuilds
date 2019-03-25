import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  TiStarFullOutline,
  TiStarOutline,
  TiShoppingCart,
  TiChevronRight,
  TiChevronLeft,
} from 'react-icons/ti'
import { FaRocket } from 'react-icons/fa'
import { uid } from 'react-uid'
import SwipeableViews from 'react-swipeable-views'
import { NavLink } from 'react-router-dom'

const StyledCard = styled.section`
  padding: 25px;
  background: linear-gradient(to bottom, #ffffff, #ffffff, #fafafa);
  min-width: 280px;
  height: 510px;
  border-bottom: solid 1px #f1f1f1;
  border-radius: 0 0 25px 25px;
  scroll-snap-align: start;
`

const PcBuildTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  position: sticky;
  top: 0;
  margin: -25px -25px 0 -25px;
  padding: 25px 25px 5px 25px;
  background: linear-gradient(
    to bottom,
    #ffffff,
    #ffffff,
    rgba(255, 255, 255, 0.9)
  );
  border-radius: 0 0 25px 25px;
  z-index: 1;
`

const PcBuildTitle = styled.h2`
  margin: 0;
  color: #330086;
  font-weight: normal;
  font-size: 20px;
`

const PerformanceIndicator = styled.div`
  display: flex;
  padding: 2px 5px 2px 5px;
  justify-content: center;
  align-items: center;
  color: #330086;
  margin-right: 10px;
`

const BookmarkStarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 25px;
  cursor: pointer;
  color: #330086;
`

const PcBuildSubtitleContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  height: 20px;
`

const CategoryTag = styled(NavLink)`
  display: flex;
  height: 27px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background: #330086;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  user-select: none;
  transition: all 0.3s ease-in;
  user-select: none;
  :hover {
    background: #440086;
  }
`

const PcBuildSubtitle = styled.h3`
  margin: 0;
  margin-left: 5px;
  font-size: 16px;
  font-weight: lighter;
`

const SwipeIndicatorContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  color: #afafaf;
  font-size: 14px;
  user-select: none;
  transition: all 0.3s ease-in;
  :hover {
    color: #5f5f5f;
  }
`

const PcBuildImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 10px;
`

const CpuGpuLogoContainer = styled.div`
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
  max-height: 185px;
`

const KeyFacts = styled.section`
  line-height: 1.7;
`

const PartListTitleGrid = styled.div`
  align-items: center;
  height: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
`

const PartListTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`

const PartRow = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 10px;
  grid-template-columns: auto 70px;
  grid-template-rows: 30px;
  font-size: 14px;
  align-items: center;
  background: linear-gradient(to bottom, #ffffff, #fbfbfb);
`

const Part = styled.div`
  border-bottom: solid 1px #f1f1f1;
  height: 30px;
  padding-top: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const PartPrice = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27px;
  width: 70px;
  font-size: 13px;
  background: transparent;
  color: #330086;
  border: solid 1px #330086;
  border-radius: 5px;
  user-select: none;
  transition: all 0.3s ease-in;
  :hover {
    background: #330086;
    color: white;
  }
`

const PartPriceLink = styled.a`
  text-decoration: none;
`

const PcBuildTotalRow = styled.div`
  justify-content: flex-end;
  align-items: center;
  display: flex;
  padding-top: 5px;
`

const PcBuildTotal = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 150px;
  height: 34px;
  color: white;
  border: solid 1px #6d36c6;
  background: #6d36c6;
  border-radius: 5px;
  user-select: none;
  transition: all 0.3s ease-in;
  :hover {
    border-color: #330086;
    background: #330086;
  }
`

const SwipeContainer = styled.div`
  height: 390px;
  overflow-y: hidden;
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
        <PcBuildTitle> {title} </PcBuildTitle>
        <PerformanceIndicator
          style={
            performance >= 9
              ? { color: '#330086' }
              : performance >= 8
              ? { opacity: 0.8 }
              : performance >= 6
              ? { opacity: 0.7 }
              : performance >= 4
              ? { opacity: 0.6 }
              : { opacity: 0.4 }
          }>
          <FaRocket />
          &nbsp;
          <strong> {performance} </strong>
        </PerformanceIndicator>
        <BookmarkStarContainer onClick={() => onBookmark(title)}>
          {bookmarked ? (
            <TiStarFullOutline style={{ color: '#6d36c6' }} />
          ) : (
            <TiStarOutline />
          )}
        </BookmarkStarContainer>
      </PcBuildTitleContainer>
      <SwipeableViews index={index} onChangeIndex={() => setIndex(1)}>
        <SwipeContainer>
          <PcBuildSubtitleContainer>
            <CategoryTag
              to={
                category === 'gaming'
                  ? '/gaming'
                  : category === 'editing'
                  ? '/editing'
                  : category === 'office'
                  ? '/office'
                  : '/'
              }>
              {category}{' '}
            </CategoryTag>
            <PcBuildSubtitle>{subtitle}</PcBuildSubtitle>
            <SwipeIndicatorContainer
              onClick={index === 1 ? () => setIndex(0) : () => setIndex(1)}>
              Details
              <TiChevronRight size="25px" />
            </SwipeIndicatorContainer>
          </PcBuildSubtitleContainer>
          <PcBuildImageContainer>
            <CpuGpuLogoContainer>
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
            </CpuGpuLogoContainer>
            <PcBuildImage src={image} />
          </PcBuildImageContainer>
          <KeyFacts>{keyFacts}</KeyFacts>
        </SwipeContainer>
        <SwipeContainer>
          <PartListTitleGrid>
            <PartListTitle>Part List</PartListTitle>
            <SwipeIndicatorContainer onClick={() => setIndex(0)}>
              <TiChevronLeft size="25px" />
            </SwipeIndicatorContainer>
          </PartListTitleGrid>
          {parts.map(part => (
            <PartRow key={uid(part)}>
              <Part>
                <strong>{part.partManufacturer}</strong> {part.partName}
              </Part>
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
            </PartRow>
          ))}
        </SwipeContainer>
      </SwipeableViews>
      <PcBuildTotalRow>
        <form
          action="https://www.amazon.de/exec/obidos/dt/assoc/handle-buy-box"
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
