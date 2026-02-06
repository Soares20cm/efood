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

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>
            A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
          </ProductDescription>
          <ProductDescription>Serve: de 2 a 3 pessoas</ProductDescription>
          <Button type="button" title="Adicionar ao carrinho" onClick={handleAddToCart}>
            Adicionar ao carrinho - R$ 60,90
          </Button>
        </ProductInfo>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default CheckoutModal