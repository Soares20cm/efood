import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  lightSalmon: '#FFEBD9',
  white: '#FFFFFF',
  beige: '#FFF8F2',
  lightYellow: '#FFB930'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.salmon};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`

export default GlobalStyle