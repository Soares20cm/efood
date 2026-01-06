import styled from 'styled-components'
import { cores } from '../../styles'
import bannerImg from '../../assets/images/VectorFundoCabecalho.png'

export const BannerContainer = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 138px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${cores.corSalmao};
  line-height: 42px;
`