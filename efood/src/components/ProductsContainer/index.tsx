import React from 'react'
import { Container, ProductGrid } from './styles'
import ProductItem from '../ProductItem'

type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
  porcao: string
}

type Props = {
  products?: Product[]
  onProductClick?: (product: any) => void
}

const ProductsContainer = ({ products = [], onProductClick }: Props) => {
  if (products.length === 0) {
    return (
      <Container>
        <div style={{ textAlign: 'center', color: '#fff', padding: '40px' }}>
          Nenhum produto disponível
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <ProductGrid>
        {products.map((produto) => (
          <ProductItem
            key={produto.id}
            id={produto.id}
            name={produto.name}
            description={produto.description}
            image={produto.image}
            price={produto.price}
            porcao={produto.porcao}
            onProductClick={onProductClick}
          />
        ))}
      </ProductGrid>
    </Container>
  )
}

export default ProductsContainer