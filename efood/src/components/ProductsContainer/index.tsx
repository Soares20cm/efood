import React from 'react'
import { Container, ProductGrid } from './styles'
import ProductItem from '../ProductItem'

// Importando as imagens dos produtos
import produto1 from '../../images/produto1.png'
import produto2 from '../../images/produto2.png'
import produto3 from '../../images/produto3.png'
import produto4 from '../../images/produto4.png'
import produto5 from '../../images/produto5.png'
import produto6 from '../../images/produto6.png'

const produtos = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: produto1
  },
  {
    id: 2,
    name: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: produto2
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: produto3
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: produto4
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: produto5
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: produto6
  }
]

type Props = {
  onProductClick?: (product: {
    id: number
    name: string
    description: string
    image: string
  }) => void
}

const ProductsContainer = ({ onProductClick }: Props) => (
  <Container>
    <ProductGrid>
      {produtos.map((produto) => (
        <ProductItem
          key={produto.id}
          id={produto.id}
          name={produto.name}
          description={produto.description}
          image={produto.image}
          onProductClick={onProductClick}
        />
      ))}
    </ProductGrid>
  </Container>
)

export default ProductsContainer