import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.corDePeleFundo};
  padding: 40px 0;
  width: 100%;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  a {
    color: ${cores.corSalmao};
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
  }

  img {
    width: 125px;
    height: 57.5px;
  }
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  color: ${cores.corSalmao};
  font-weight: 900;
  font-size: 18px;

  img {
    margin-left: 8px;
    width: 32px;
    height: 32px;
  }
`
