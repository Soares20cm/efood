import React from 'react'
import Button from '../Button'
import { Card, Image, Content, Title, Description } from './styles'

type Props = {
  id: number
  name: string
  description: string
  image: string
  price: number
  porcao: string
  onProductClick?: (product: {
    id: number
    name: string
    description: string
    image: string
    price: number
    porcao: string
  }) => void
}

const ProductItem = ({ id, name, description, image, price, porcao, onProductClick }: Props) => {
  const handleClick = () => {
    if (onProductClick) {
      onProductClick({ id, name, description, image, price, porcao })
    }
  }

  return (
    <Card>
      <Image src={image} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Button type="button" title="Adicionar ao carrinho" onClick={handleClick}>
          Adicionar ao carrinho
        </Button>
      </Content>
    </Card>
  )
}

export default ProductItem