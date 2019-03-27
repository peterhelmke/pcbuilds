import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #222222;
    margin: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
  }
`
