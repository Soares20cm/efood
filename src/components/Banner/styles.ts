import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px; /* Altura aproximada do Figma */
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    text-align: center;
  }

  .logo {
    width: 125px;
    height: 57px;
    margin-bottom: 60px;
  }
`

export const TituloBanner = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${cores.corSalmao};
  max-width: 540px;
`
