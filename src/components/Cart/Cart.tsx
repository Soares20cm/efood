import { useState } from 'react';
import { Button } from '../Button';
import { 
  CartOverlay, 
  CartContainer, 
  CartHeader, 
  CloseButton, 
  CartTitle,
  CartContent,
  CartItems,
  CartItem,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemQuantity,
  RemoveButton,
  EmptyMessage,
  CartFooter,
  TotalContainer,
  TotalLabel,
  TotalPrice
} from './styles';
import type { CartState } from '../../types';

interface CartProps {
  cart: CartState;
  onClose: () => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout?: () => void;
}

export const Cart = ({ cart, onClose, onRemoveItem, onCheckout }: CartProps) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      alert(`Pedido realizado com sucesso!\n\nTotal: ${formatPrice(cart.totalPrice)}\nItens: ${cart.totalItems}\n\nObrigado por usar o efood! 🍕`);
      setIsCheckingOut(false);
      if (onCheckout) {
        onCheckout();
      }
      onClose();
    }, 1000);
  };

  if (!cart.isOpen) return null;

  return (
    <>
      <CartOverlay onClick={onClose} />
      <CartContainer>
        <CartHeader>
          <CartTitle>Carrinho ({cart.totalItems})</CartTitle>
          <CloseButton onClick={onClose} aria-label="Fechar carrinho">
            ✕
          </CloseButton>
        </CartHeader>

        <CartContent>
          {cart.items.length === 0 ? (
            <EmptyMessage>Seu carrinho está vazio</EmptyMessage>
          ) : (
            <CartItems>
              {cart.items.map((item) => (
                <CartItem key={item.id}>
                  <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>{formatPrice(item.price)}</ItemPrice>
                    <ItemQuantity>Quantidade: {item.quantity}</ItemQuantity>
                  </ItemInfo>
                  <RemoveButton 
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remover ${item.name}`}
                  >
                    🗑️
                  </RemoveButton>
                </CartItem>
              ))}
            </CartItems>
          )}
        </CartContent>

        {cart.items.length > 0 && (
          <CartFooter>
            <TotalContainer>
              <TotalLabel>Total:</TotalLabel>
              <TotalPrice>{formatPrice(cart.totalPrice)}</TotalPrice>
            </TotalContainer>
            <Button 
              size="large" 
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'Processando...' : 'Finalizar Pedido'}
            </Button>
          </CartFooter>
        )}
      </CartContainer>
    </>
  );
};
