import Food from '../../Models/Food'
import ProductCard from '../ProductCard'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'beige'
  food: Food[]
}

const ProductsList = ({ background, title, food }: Props) => (
  <Container background={background}>
    <div className="container">
      {title && <h2>{title}</h2>}
      <List>
        {food.map((food) => (
          <ProductCard
            key={food.id}
            id={food.id}
            description={food.description}
            image={food.image}
            title={food.title}
            rating={food.rating}
            infos={food.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList