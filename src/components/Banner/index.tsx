import { Link } from 'react-router-dom'

import { Imagem, TituloBanner } from './styles'
import bannerImg from '../../assets/images/VectorFundoCabecalho.png'
import bannerImgEfood from '../../assets/images/logo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      {/* Agora o Logo é um Link que leva para a Home (/) */}
      <Link title="Clique aqui para voltar para a Home" to="/">
        <img src={bannerImgEfood} alt="efood" className="logo" />
      </Link>

      <TituloBanner>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </TituloBanner>
    </div>
  </Imagem>
)

export default Banner
