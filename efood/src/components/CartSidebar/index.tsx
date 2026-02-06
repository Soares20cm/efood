import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { remove } from '../../store/reducers/cart'
import Button from '../Button'
import lixeiraIcon from '../../images/lixeira-de-reciclagem 1.png'
import {
  SidebarOverlay,
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
  CloseButton,
  CartList,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  RemoveButton,
  TotalSection,
  TotalText,
  TotalValue,
  EmptyCart,
  ButtonWrapper
} from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
  onContinue: () => void
}

const CartSidebar = ({ isOpen, onClose, onContinue }: Props) => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  if (!isOpen) return null

  const handleRemove = (id: number) => {
    dispatch(remove({ id }))
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const total = items.length * 60.90 // Preço fixo por item

  const handleContinue = () => {
    if (items.length > 0) {
      onContinue()
      onClose()
    }
  }

  return (
    <SidebarOverlay onClick={handleOverlayClick}>
      <SidebarContainer>
        <SidebarHeader>
          <SidebarTitle>Carrinho</SidebarTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </SidebarHeader>

        {items.length === 0 ? (
          <EmptyCart>
            <p>O carrinho está vazio.</p>
            <p>Adicione produtos para continuar!</p>
          </EmptyCart>
        ) : (
          <>
            <CartList>
              {items.map((item: any) => (
                <CartItem key={item.id}>
                  <ItemImage src={item.image} alt={item.name} />
                  <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>R$ 60,90</ItemPrice>
                  </ItemInfo>
                  <RemoveButton onClick={() => handleRemove(item.id)}>
                    <img src={lixeiraIcon} alt="Remover" />
                  </RemoveButton>
                </CartItem>
              ))}
            </CartList>

            <TotalSection>
              <TotalText>Valor total</TotalText>
              <TotalValue>R$ {total.toFixed(2).replace('.', ',')}</TotalValue>
            </TotalSection>

            <ButtonWrapper>
              <Button 
                type="button" 
                title="Continuar com a entrega" 
                onClick={handleContinue}
              >
                Continuar com a entrega
              </Button>
            </ButtonWrapper>
          </>
        )}
      </SidebarContainer>
    </SidebarOverlay>
  )
}

export default CartSidebar
