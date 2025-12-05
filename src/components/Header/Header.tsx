import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, CartButton, CartBadge } from './styles';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>efood</Logo>
      </Link>
      <CartButton onClick={onCartClick} aria-label="Abrir carrinho">
        🛒
        {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
      </CartButton>
    </HeaderContainer>
  );
};
