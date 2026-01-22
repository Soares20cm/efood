import ProductsList from '../../components/ProductsList'
import Footer from '../../components/Footer'
import Food from '../../Models/Food'

import macarrao from '../../assets/images/macarrao.png'
import suschi from '../../assets/images/suchi.png'

const promocoes: Food[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    infos: ['Japonesa'],
    image: suschi,
    rating: 4.9
  },

  {
    id: 2,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao,
    rating: 4.6
  }
]

const Categories = () => (
  <>
    <ProductsList food={promocoes} title="Restaurantes" background="beige" />
    <Footer />
  </>
)

export default Categories
