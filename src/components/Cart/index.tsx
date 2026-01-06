import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart' // Importe a ação de fechar

import { CartContainer, Overlay, Sidebar, CartItem } from './styles'
import pizza from '../../assets/images/pizza.png'
import Button from '../Button'

const Cart = () => {
  // Pegamos o estado isOpen do Redux
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close()) // Função para fechar o carrinho
  }

  return (
    // Passamos o estado para o Styled Component
    <CartContainer $isOpen={isOpen}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} alt="Pizza Marguerita" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <button className="delete-button" type="button" />
          </CartItem>
        </ul>

        <div className="total">
          <p>Valor total</p>
          <span>R$ 60,90</span>
        </div>

        <Button type="button" title="Clique para continuar com a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
