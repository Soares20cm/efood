import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from './store'
import Routes from './routes'
import GlobalStyle from './styles'

const theme = {
  colors: {
    primary: '#E66767',
    secondary: '#FFEBD9',
    white: '#FFFFFF',
    cream: '#FFF8F2',
    text: '#4B4B4B'
  }
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App