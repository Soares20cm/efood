import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { 
  HeaderContainer, 
  VectorBackground, 
  Logo2Background, 
  HeaderContent, 
  Logo, 
  Navigation,
  RestaurantTitle,
  RestaurantCategory,
  CartButton
} from './styles'
import logo1 from '../../images/logo1.png'

type Props = {
  onOpenCart?: () => void
}

const RestaurantHeader = ({ onOpenCart }: Props) => {
  const { items } = useSelector((state: RootState) => state.cart)

  return (
    <HeaderContainer>
      <VectorBackground />
      <Logo2Background />
      <HeaderContent>
        <Navigation>
          <Link to="/">Restaurantes</Link>
        </Navigation>
        <Logo src={logo1} alt="EFOOD" />
        <Navigation>
          <CartButton onClick={onOpenCart}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </Navigation>
      </HeaderContent>
      <RestaurantCategory>Italiana</RestaurantCategory>
      <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
    </HeaderContainer>
  )
}

export default RestaurantHeader