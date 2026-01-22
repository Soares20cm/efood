import Button from '../Button'
import { Card, Descricao, Titulo, ImageContainer } from './styles'

type Props = {
  title: string
  description: string
  image: string
  price?: string
}

const ProductCard = ({ title, description, image, price }: Props) => (
  <Card>
    <ImageContainer>
      <img src={image} alt={title} />
    </ImageContainer>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type="button" title="Clique aqui para adicionar ao carrinho">
      {price ? `Adicionar ao carrinho - ${price}` : 'Adicionar ao carrinho'}
    </Button>
  </Card>
)

export default ProductCard
