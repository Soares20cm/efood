import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { useCart } from './hooks/useCart';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Toast } from './components/Toast';
import { Home } from './pages/Home';
import { Restaurant } from './pages/Restaurant';
import { NotFound } from './pages/NotFound';
import type { MenuItem } from './types';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  const { cart, addItem, removeItem, toggleCart, clearCart } = useCart();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = useCallback((item: MenuItem) => {
    addItem(item);
    setToastMessage(`${item.name} adicionado ao carrinho!`);
  }, [addItem]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppContainer>
          <Header cartCount={cart.totalItems} onCartClick={toggleCart} />
          <Cart cart={cart} onClose={toggleCart} onRemoveItem={removeItem} onCheckout={clearCart} />
          {toastMessage && (
            <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
          )}
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurant/:id" element={<Restaurant onAddToCart={handleAddToCart} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
          <Footer />
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
