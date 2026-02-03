import React from 'react'
import Button from '../Button'
import { Card, Image, Content, Title, Description } from './styles'

type Props = {
  id: number
  name: string
  description: string
  image: string
  onProductClick?: (product: {
    id: number
    name: string
    description: string
    image: string
  }) => void
}

const ProductItem = ({ id, name, description, image, onProductClick }: Props) => {
  const handleClick = () => {
    if (onProductClick) {
      onProductClick({ id, name, description, image })
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