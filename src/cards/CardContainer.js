import styled from 'styled-components'

export default styled.section`
  margin: 0 auto 0 auto;
  max-width: 810px;
  overflow-y: scroll;
  scroll-snap-type: ${window.innerHeight >= 600 ? 'y mandatory' : 'none'};
  -webkit-overflow-scrolling: touch;
  padding-bottom: 10px;
  @media only screen and (max-width: 374px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    padding: 0 5px 10px 5px;
  }
  @media only screen and (min-width: 1024px) {
    grid-gap: 20px;
    padding: 0 20px 10px 20px;
  }
`
