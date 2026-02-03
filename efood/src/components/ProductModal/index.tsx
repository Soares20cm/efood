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
  ProductDescription, 
  ButtonContainer 
} from './styles'

type Props = {
  product: {
    id: number
    name: string
    description: string
    image: string
  } | null
  isOpen: boolean
  onClose: () => void
}

const ProductModal = ({ product, isOpen, onClose }: Props) => {
  const dispatch = useDispatch()

  if (!isOpen || !product) return null

  const addToCart = () => {
    dispatch(add(product))
    onClose()
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ButtonContainer>
            <Button type="button" title="Adicionar ao carrinho" onClick={addToCart}>
              Adicionar ao carrinho
            </Button>
          </ButtonContainer>
        </ProductInfo>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default ProductModal