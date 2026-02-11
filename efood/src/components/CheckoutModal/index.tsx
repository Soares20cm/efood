import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'
import Button from '../Button'
import { 
  ModalOverlay, 
  ModalContainer, 
  CloseButton, 
  ProductImage, 
  ProductInfo, 
  ProductTitle, 
  ProductDescription
} from './styles'

type Props = {
  product: {
    id: number
    name: string
    description: string
    image: string
    price?: number
    porcao?: string
  } | null
  isOpen: boolean
  onClose: () => void
  onAddToCart: () => void
}

const CheckoutModal = ({ product, isOpen, onClose, onAddToCart }: Props) => {
  const dispatch = useDispatch()

  if (!isOpen || !product) return null

  const handleAddToCart = () => {
    dispatch(add(product))
    onAddToCart()
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const price = product.price || 60.90

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          {product.porcao && <ProductDescription>Serve: {product.porcao}</ProductDescription>}
          <Button type="button" title="Adicionar ao carrinho" onClick={handleAddToCart}>
            {`Adicionar ao carrinho - R$ ${price.toFixed(2).replace('.', ',')}`}
          </Button>
        </ProductInfo>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default CheckoutModal