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
  RestaurantCategory
} from './styles'
import logo1 from '../../images/logo1.png'

const RestaurantHeader = () => {
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
          <span>{items.length} produto(s) no carrinho</span>
        </Navigation>
      </HeaderContent>
      <RestaurantCategory>Italiana</RestaurantCategory>
      <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
    </HeaderContainer>
  )
}

export default RestaurantHeader