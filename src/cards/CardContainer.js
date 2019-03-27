import styled from 'styled-components'

export default styled.section`
  overflow-y: scroll;
  scroll-snap-type: ${window.innerHeight >= 600 ? 'y mandatory' : 'none'};
  -webkit-overflow-scrolling: touch;
  padding-bottom: 10px;
  max-width: 1025px;
`
