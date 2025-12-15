import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderContent, RestaurantsLink, Logo, CartInfo, CartButton, CartBadge } from './styles';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  isRestaurantPage?: boolean;
}

export const Header = ({ cartCount, onCartClick, isRestaurantPage = false }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent $isHomePage={!isRestaurantPage}>
        {isRestaurantPage ? (
          <>
            <RestaurantsLink>
              <Link to="/">Restaurantes</Link>
            </RestaurantsLink>
            <Link to="/">
              <Logo>efood</Logo>
            </Link>
            <CartInfo>
              <CartButton onClick={onCartClick} aria-label="Abrir carrinho">
                {cartCount} produto(s) no carrinho
                {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
              </CartButton>
            </CartInfo>
          </>
        ) : (
          <Link to="/">
            <Logo>efood</Logo>
          </Link>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};
