import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { FaRegStar, FaStar } from 'react-icons/fa'

const StyledCard = styled.section`
  display: grid;
  padding: 25px;
  height: 100vh;
  
  max-height: 517px;
  background: linear-gradient(to bottom, #FFFFFF, #FFFFFF, #F9F9F9);
`

const PCBuildTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
`

const PCBuildTitle = styled.h2`
  margin: 0;
  color: #330086;
  font-weight: normal;
  font-size: 20px;
`

const BookmarkStarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 25px;
`

const PCBuildSubtitle = styled.h3`
  margin: 0;
  margin-top: 10px;
  font-size: 16px;
  font-weight: lighter;
`
const PCBuildImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 325px;
  height: 210px;
`
const PCBuildImage = styled.img`
  max-width: 325px;
  max-height: 210px;
`

const KeyFactsList = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding: 0;
`

const BadgeRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

const TotalBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  right: 25px;
  font-size: 16px;
  background: #330086;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  color: #F1F1F1;
  border-radius: 5px;
`

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  manufactureritem1: PropTypes.string,
  item1: PropTypes.string,
  manufactureritem2: PropTypes.string,
  item2: PropTypes.string,
  manufactureritem3: PropTypes.string,
  item3: PropTypes.string,
  manufactureritem4: PropTypes.string,
  item4: PropTypes.string,
  total: PropTypes.string,
  category: PropTypes.string,
  bookmarked: PropTypes.bool,
  onBookmark: PropTypes.func,

}

Card.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  image: 'http://via.placeholder.com/325x210/',
  manufactureritem1: 'Manufacturer1',
  item1: 'Item1',
  manufactureritem2: 'Manufacturer2',
  item2: 'Item2',
  manufactureritem3: 'Manufacturer3',
  item3: 'Item3',
  manufactureritem4: 'Manufacturer4',
  item4: 'Item4',
  total: 'XXX'
}

export default function Card({ title, bookmarked, onBookmark, subtitle, image, manufactureritem1, item1, manufactureritem2, item2, manufactureritem3, item3, manufactureritem4, item4, total}) {

  return (
    <div css="scroll-snap-align: start;">
      <StyledCard>
        <PCBuildTitleContainer>
          <PCBuildTitle>{ title }</PCBuildTitle>
          <BookmarkStarContainer onClick={() => onBookmark(title)}>
            {bookmarked ? 
              <FaStar color="#330086" /> : 
              <FaRegStar color="#330086" /> 
            }
          </BookmarkStarContainer>
        </PCBuildTitleContainer>
        <PCBuildSubtitle>{ subtitle }</PCBuildSubtitle>
        <PCBuildImageContainer>
          <PCBuildImage src={ image }/>
        </PCBuildImageContainer>
        <KeyFactsList>
        <li><strong>{ manufactureritem1 }</strong> { item1 }</li>
        <li><strong>{ manufactureritem2 }</strong> { item2 }</li>
        <li><strong>{ manufactureritem3 }</strong> { item3 }</li>
        <li><strong>{ manufactureritem4 }</strong> { item4 }</li>
        </KeyFactsList>
        <BadgeRow>
          <TotalBadge><strong>Total</strong>&nbsp;{Math.round( total )}€</TotalBadge>
        </BadgeRow>
      </StyledCard>
    </div>
  )
}