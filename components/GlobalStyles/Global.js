import { createGlobalStyle } from 'styled-components'

import { ResetBrowserDefaults } from './cssReset'

const GlobalStyles = createGlobalStyle`
  ${ResetBrowserDefaults}
  
  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  body {
    font-size: 1rem;
    position: relative;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`
export default GlobalStyles