import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'
import Footer from '../../components/Footer'
import Food from '../../Models/Food'
import { fetchRestaurants } from '../../services/api'
import sushiImg from '../../images/sushi.png'
import macarraoImg from '../../images/macarrao.png'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Food[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        // Busca dados da API
        await fetchRestaurants()
        
        // Usa dados originais com imagens locais
        const originalData: Food[] = [
          {
            id: 1,
            category: 'Japonesa',
            description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
            image: sushiImg,
            infos: ['Destaque da semana', 'Japonesa'],
            title: 'Hioki Sushi',
            rating: 4.9,
            highlighted: true
          },
          {
            id: 2,
            category: 'Italiana',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            image: macarraoImg,
            infos: ['Italiana'],
            title: 'La Dolce Vita Trattoria',
            rating: 4.6,
            highlighted: false
          },
          {
            id: 3,
            category: 'Italiana',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            image: macarraoImg,
            infos: ['Italiana'],
            title: 'La Dolce Vita Trattoria',
            rating: 4.6,
            highlighted: false
          },
          {
            id: 4,
            category: 'Japonesa',
            description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
            image: sushiImg,
            infos: ['Japonesa'],
            title: 'Hioki Sushi',
            rating: 4.9,
            highlighted: false
          },
          {
            id: 5,
            category: 'Italiana',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            image: macarraoImg,
            infos: ['Italiana'],
            title: 'La Dolce Vita Trattoria',
            rating: 4.6,
            highlighted: false
          },
          {
            id: 6,
            category: 'Japonesa',
            description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
            image: sushiImg,
            infos: ['Japonesa'],
            title: 'Hioki Sushi',
            rating: 4.9,
            highlighted: false
          }
        ]
        
        setRestaurantes(originalData)
      } catch (error) {
        console.error('Erro ao carregar restaurantes:', error)
      } finally {
        setLoading(false)
      }
    }

    loadRestaurants()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <Hero />
        <div style={{ textAlign: 'center', padding: '40px' }}>Carregando restaurantes...</div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <Hero />
      <ProductsList
        food={restaurantes}
        title=""
        background="beige"
      />
      <Footer />
    </>
  )
}

export default Home