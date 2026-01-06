import { BannerContainer, Logo, Title } from './styles'
import logo from '../../assets/images/logo.png'

const HomeBanner = () => (
  <BannerContainer>
    <Logo src={logo} alt="EFOOD" />
    <Title>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </Title>
  </BannerContainer>
)

export default HomeBanner