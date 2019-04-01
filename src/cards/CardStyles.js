import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledCard = styled.section`
  padding: 25px;
  background: linear-gradient(to bottom, #ffffff, #ffffff, #fafafa);
  min-width: 280px;
  height: 510px;
  border-bottom: solid 1px #e1e1e1;
  border-radius: 0 0 25px 25px;
  scroll-snap-align: start;
`

export const PcBuildTitleContainer = styled.div`
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

export const PcBuildTitle = styled.h2`
  margin: 0;
  color: #330086;
  font-weight: normal;
  font-size: 20px;
`

export const PerformanceIndicator = styled.div`
  display: flex;
  padding: 2px 5px 2px 5px;
  justify-content: center;
  align-items: center;
  color: #330086;
  margin-right: 10px;
  user-select: none;
`

export const BookmarkStarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 25px;
  cursor: pointer;
  color: #330086;
`

export const PcBuildSubtitleContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  height: 20px;
`

export const CategoryTag = styled(NavLink)`
  display: flex;
  height: 25px;
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

export const PcBuildSubtitle = styled.h3`
  margin: 0;
  margin-left: 8px;
  font-size: 16px;
  font-weight: lighter;
`

export const SwipeIndicatorContainer = styled.div`
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

export const PcBuildImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 185px 1fr;
  height: 200px;
  margin-top: 10px;
`

export const CpuGpuLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CpuGpu = styled.img`
  max-width: 38px;
  max-height: 38px;
  margin: 8px;
`

export const PcBuildImageAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PcBuildImage = styled.img`
  max-height: 185px;
`

export const KeyFacts = styled.section`
  padding-top: 10px;
  line-height: 1.5;
  font-size: 16px;
`

export const PartListTitleGrid = styled.div`
  display: grid;
  align-items: center;
  height: 20px;
  grid-template-columns: 1fr auto;
`

export const PartListTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`

export const PartRow = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 10px;
  grid-template-columns: auto 70px;
  grid-template-rows: 30px;
  font-size: 14px;
  align-items: center;
  background: linear-gradient(to bottom, #ffffff, #fbfbfb);
`

export const Part = styled.div`
  border-bottom: solid 1px #f1f1f1;
  height: 30px;
  padding-top: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const PartPrice = styled.button`
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

export const PartPriceLink = styled.a`
  text-decoration: none;
`

export const PcBuildTotalRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 5px;
`

export const PcBuildTotal = styled.button`
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

export const SwipeContainer = styled.div`
  height: 390px;
  overflow-y: hidden;
`
