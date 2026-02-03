import styled from 'styled-components'
import { colors } from '../../styles'
import heroImg from '../../images/Vector.png'

export const HeroContainer = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: 2031px 384px;
  background-position: center;
  background-color: ${colors.lightSalmon};
  font-weight: bold;
  position: relative;

  .container {
    position: relative;
    height: 100%;
    max-width: 1366px;
    margin: 0 auto;
  }
`

export const HeroContent = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`

export const LogoContainer = styled.div`
  img {
    width: 125px;
    height: 57.5px;
  }
`

export const Title = styled.h2`
  position: absolute;
  width: 539px;
  height: 84px;
  top: 236px;
  left: 414px;
  font-family: Roboto;
  font-weight: 900;
  font-style: normal;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: ${colors.salmon};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1366px) {
    left: 50%;
    transform: translateX(-50%);
  }
`

export const Subtitle = styled.p`
  font-size: 20px;
  color: ${colors.salmon};
  margin-top: 40px;
`