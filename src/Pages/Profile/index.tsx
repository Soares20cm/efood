import Header from '../../components/Header'
import ProfileBanner from '../../components/ProfileBanner'
import ProductsGrid from '../../components/ProductsGrid'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'

// Importação das imagens
import macarronada from '../../assets/images/macarrao.png'
import pizza from '../../assets/images/pizza.png'

const textoLongoPizza = 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem.'

const textoLongoMacarrao = 'Nossa macarronada é feita com massa produzida diariamente em nossa casa, servida com um molho rústico de tomates italianos, manjericão fresco colhido em nossa horta e finalizada com queijo parmesão de alta qualidade.'

const produtos = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    info: textoLongoPizza,
    image: pizza,
    portion: 'de 2 a 3 pessoas',
    price: '60,90'
  },
  {
    id: 2,
    title: 'Macarronada Especial',
    description: 'Massa artesanal com molho de tomates frescos, manjericão e queijo parmesão ralado.',
    info: textoLongoMacarrao,
    image: macarronada,
    portion: 'para 1 pessoa',
    price: '48,00'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    info: textoLongoPizza,
    image: pizza,
    portion: 'de 2 a 3 pessoas',
    price: '60,90'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    info: textoLongoPizza,
    image: pizza,
    portion: 'de 2 a 3 pessoas',
    price: '60,90'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    info: textoLongoPizza,
    image: pizza,
    portion: 'de 2 a 3 pessoas',
    price: '60,90'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    info: textoLongoPizza,
    image: pizza,
    portion: 'de 2 a 3 pessoas',
    price: '60,90'
  }
]

const Profile = () => (
  <>
    <Header />
    <ProfileBanner
      category="Italiana"
      title="La Dolce Vita Trattoria"
      backgroundImage={macarronada} 
    />
    <div className="container">
      {/* Certifique-se que o ProductsGrid está recebendo os produtos corretamente */}
      <ProductsGrid products={produtos} />
    </div>
    <Footer />
    <Cart /> 
  </>
)

export default Profile