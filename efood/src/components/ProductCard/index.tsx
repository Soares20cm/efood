import Button from '../Button'
import { Card, Descricao, Titulo, ImageContainer, Infos, Rating, StarIcon } from './styles'
import estrela from '../../images/estrela.png'

type Props = {
  id?: number
  title: string
  description: string
  image: string
  price?: string
  rating?: number
  infos?: string[]
}

const ProductCard = ({ id, title, description, image, price, rating, infos }: Props) => (
  <Card>
    <ImageContainer>
      <img src={image} alt={title} />
      {infos && infos.length > 0 && (
        <Infos>
          {infos.map((info, index) => (
            <span key={index}>{info}</span>
          ))}
        </Infos>
      )}
    </ImageContainer>
    <div>
      <Titulo>{title}</Titulo>
      {rating && (
        <Rating>
          <span>{rating}</span>
          <StarIcon>
            <img src={estrela} alt="Estrela" />
          </StarIcon>
        </Rating>
      )}
    </div>
    <Descricao>{description}</Descricao>
    <Button 
      type="link" 
      title="Clique aqui para saber mais"
      to={`/restaurante/${id || 1}`}
    >
      Saiba mais
    </Button>
  </Card>
)

export default ProductCard