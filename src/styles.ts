import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  corSalmao: '#E66767',
  corDePeleFundo: '#FFF8F2',
  corDePeleFundoEscuro: '#FFEBD9',
  corDeFundoHome: 'rgb(255, 195, 142)',
  preto: '#000'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.corDePeleFundo};
    color: ${cores.corSalmao};
    padding: 0;
  }

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
