import styled from 'styled-components'
import { colors } from '../../styles'
import vectorImg from '../../images/Vector.png'
import logo2Img from '../../images/logo2.png'

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 442px;
  overflow: hidden;
  margin-bottom: 56px;
`

export const VectorBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 186px;
  top: -23px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url(${vectorImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`

export const Logo2Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 280px;
  top: 162px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url(${logo2Img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 2;
  opacity: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000080;
    z-index: 1;
  }
`

export const RestaurantTitle = styled.h1`
  position: absolute;
  width: 676px;
  height: 33.25px;
  top: 376.75px;
  left: calc(50% - 512px);
  font-family: Roboto;
  font-weight: 900;
  font-style: normal;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${colors.white};
  margin: 0;
  z-index: 4;
  opacity: 1;
`

export const RestaurantCategory = styled.p`
  position: absolute;
  width: 101px;
  height: 33.25px;
  top: 187px;
  left: calc(50% - 512px);
  font-family: Roboto;
  font-weight: 100;
  font-style: normal;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${colors.white};
  margin: 0;
  z-index: 4;
  opacity: 1;
`

export const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 20px;
  height: 186px;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const Navigation = styled.div`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  color: ${colors.salmon};

  a {
    color: ${colors.salmon};
    text-decoration: none;
    font-weight: 900;
  }

  span {
    font-weight: 900;
  }
`

export const CartButton = styled.button`
  background: none;
  border: none;
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  color: ${colors.salmon};
  cursor: pointer;
  padding: 0;
  
  &:hover {
    opacity: 0.8;
  }
`