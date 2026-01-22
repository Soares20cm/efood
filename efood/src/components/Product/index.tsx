import Tag from '../Tag'
import Button from '../Button'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Rating,
  TitleRatingContainer
} from './styles'

// Atualizamos aqui para aceitar o ID que vem do ProductsList
type Props = {
  id: number // Esta linha resolve o erro
  title: string
  category?: string
  description: string
  infos?: string[]
  image: string
  rating?: number
  highlighted?: boolean
  variant?: 'home' | 'profile'
}

const Product = ({
  id,
  title,
  category,
  description,
  image,
  rating,
  highlighted,
  variant = 'home'
}: Props) => (
  <Card $variant={variant}>
    <img src={image} alt={title} />
    {variant === 'home' && (
      <>
        <Infos>
          {highlighted && <Tag>Destaque da semana</Tag>}
          {category && <Tag>{category}</Tag>}
        </Infos>
        <TitleRatingContainer>
          <Titulo>{title}</Titulo>
          <Rating>{rating}</Rating>
        </TitleRatingContainer>
      </>
    )}

    {variant === 'profile' && <Titulo>{title}</Titulo>}

    <Descricao>{description}</Descricao>

    {variant === 'home' ? (
      <Button type="link" title="Clique aqui para saber mais" to="/perfil">
        Saiba mais
      </Button>
    ) : (
      <Button type="button" title="Clique aqui para adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    )}
  </Card>
)

export default Product
