import { FooterContainer, Logo, SocialLinks } from './styles'
import logo from '../../images/logo1.png'
import facebook from '../../images/facebook-round-svgrepo-com 1.png'
import instagram from '../../images/instagram-round-svgrepo-com (1) 1.png'
import twitter from '../../images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logo} alt="EFOOD" />
      <SocialLinks>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
      </SocialLinks>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterContainer>
)

export default Footer