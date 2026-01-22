import HomeBanner from '../../components/HomeBanner'
import ProductsList from '../../components/ProductsList'
import Footer from '../../components/Footer'
import Food from '../../Models/Food'

import macarrao from '../../assets/images/macarrao.png'
import pizza from '../../assets/images/pizza.png'
import suschi from '../../assets/images/suchi.png'

// Este array representa os RESTAURANTES da página inicial
const restaurantes: Food[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.',
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    image: suschi,
    rating: 4.9,
    highlighted: true
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e pizzas deliciosas.',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao,
    rating: 4.6
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e pizzas deliciosas.',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: pizza,
    rating: 4.6
  },
  {
    id: 4,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.',
    title: 'Hioki Sushi',
    infos: ['Japonesa'],
    image: suschi,
    rating: 4.9
  },
  {
    id: 5,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e pizzas deliciosas.',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao,
    rating: 4.6
  },
  {
    id: 6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e pizzas deliciosas.',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: pizza,
    rating: 4.6
  }
]

const Home = () => (
  <>
    <HomeBanner />
    <div className="container">
      {/* ADICIONADO: variant="home" 
          Isso garante que o botão "Saiba mais" apareça corretamente.
      */}
      <ProductsList
        variant="home"
        food={restaurantes}
        title="Restaurantes"
        background="beige"
      />
    </div>
    <Footer />
  </>
)

export default Home
