import React from 'react'
import { HeroContainer, HeroContent, Title, LogoContainer } from './styles'
import logo from '../../images/logo1.png'

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <HeroContent>
        <LogoContainer>
          <img src={logo} alt="EFOOD" />
        </LogoContainer>
      </HeroContent>
      <Title>
        Viva experiências gastronômicas<br />
        no conforto da sua casa
      </Title>
    </div>
  </HeroContainer>
)

export default Hero