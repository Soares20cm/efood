import Product from '../Product'
import Food from '../../Models/Food'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'beige' | 'white'
  food: Food[]
  variant?: 'home' | 'profile'
}

const ProductsList = ({ background, title, food, variant = 'home' }: Props) => (
  <Container $background={background}>
    <div className="container">
      {/* <h2>{title}</h2> */}
      <List>
        {food.map((f) => (
          <Product
            key={f.id}
            id={f.id}
            title={f.title}
            category={f.category}
            description={f.description}
            image={f.image}
            infos={f.infos}
            rating={f.rating}
            variant={variant}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
