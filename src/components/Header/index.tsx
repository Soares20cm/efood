import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart } from './styles'
import Logo from '../../assets/images/logo.png'
import Carrinho from '../../assets/images/carrinho.png'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <Link to="/">Restaurantes</Link>
      <Link to="/">
        <img src={Logo} alt="EFOOD" />
      </Link>
      <LinkCart href="#">
        0 - produto(s) no carrinho
        <img src={Carrinho} alt="carrinho" />
      </LinkCart>
    </div>
  </HeaderBar>
)

export default Header
