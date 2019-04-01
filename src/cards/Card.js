import PropTypes from 'prop-types'
import React, { useState } from 'react'
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
import {
  StyledCard,
  PcBuildTitleContainer,
  PcBuildTitle,
  PerformanceIndicator,
  BookmarkStarContainer,
  PcBuildSubtitleContainer,
  CategoryTag,
  PcBuildSubtitle,
  SwipeIndicatorContainer,
  PcBuildImageContainer,
  CpuGpuLogoContainer,
  CpuGpu,
  PcBuildImageAlign,
  PcBuildImage,
  KeyFacts,
  PartListTitleGrid,
  PartListTitle,
  PartRow,
  Part,
  PartPrice,
  PartPriceLink,
  PcBuildTotalRow,
  PcBuildTotal,
  SwipeContainer,
} from './CardStyles'
import Tippy from '@tippy.js/react'

Card.propTypes = {
  title: PropTypes.string,
  performance: PropTypes.number,
  subtitle: PropTypes.string,
  keyFacts: PropTypes.string,
  image: PropTypes.string,
  parts: PropTypes.array,
  category: PropTypes.string,
  bookmarked: PropTypes.bool,
  onBookmark: PropTypes.func,
  total: PropTypes.string,
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
        <Tippy
          placement="left-start"
          touchHold={true}
          arrow={true}
          distance="5"
          content="Performance">
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
        </Tippy>
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
              {category}
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
            <PcBuildImageAlign>
              <PcBuildImage src={image} />
            </PcBuildImageAlign>
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
