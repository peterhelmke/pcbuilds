import React from 'react'
import styled from 'styled-components'
import SamplePCImage from './images/phanteks-p300-bk-temperedglass.jpg'
import BookmarkStar from './images/bookmark-star.svg'

const StyledCard = styled.section`
  display: grid;
  padding: 25px;
  height: 100vh;
  max-width: 375px;
  max-height: 517px;
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
`

const BookmarkStarImage = styled.img`
  height: 25px;
  width: 25px;
`

const PCBuildSubtitle = styled.h3`
  margin: 0;
  margin-top: 10px;
  font-size: 16px;
  font-weight: lighter;
`

const PCBuildImage = styled.img`
  margin-top: 10px;
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
  color: white;
  border-radius: 5px;
`

export default function Card() {

  return (
    <div css="scroll-snap-align: start;">
      <StyledCard>
        <PCBuildTitleContainer>
          <PCBuildTitle>Apex Gaming Build</PCBuildTitle>
          <BookmarkStarContainer>
            <BookmarkStarImage src={BookmarkStar} alt="Bookmark"/>
          </BookmarkStarContainer>
        </PCBuildTitleContainer>
        <PCBuildSubtitle>Featured Build</PCBuildSubtitle>
        <PCBuildImage src={SamplePCImage} alt="Phanteks P300 BK TG"/>
        <KeyFactsList>
          <li><strong>AMD</strong> Ryzen 5 2600X</li>
          <li><strong>nvidia</strong> GeForce RTX 2060</li>
          <li><strong>Phanteks</strong> Eclipse P300 Tempered Glass</li>
          <li><strong>GeIL</strong> EVO SPEAR 16 GB (2 x 8 GB)</li>
        </KeyFactsList>
        <BadgeRow>
          <TotalBadge><strong>Total</strong>&nbsp;899€</TotalBadge>
        </BadgeRow>
      </StyledCard>
    </div>
  )
}