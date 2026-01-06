import ProductItem from '../ProductItem'
import { Container, List } from './styles'

type Props = {
  products: {
    id: number
    title: string
    description: string
    info: string    // ADICIONE ESTA LINHA AQUI
    image: string
    portion?: string
    price?: string
  }[]
}

const ProductsGrid = ({ products }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {products.map((item) => (
            <ProductItem
              key={item.id}
              title={item.title}
              description={item.description}
              info={item.info} // Agora o erro 2339 sumirá aqui
              image={item.image}
              portion={item.portion || 'de 2 a 3 pessoas'}
              price={item.price || '60,90'}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsGrid