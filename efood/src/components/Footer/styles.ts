import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.lightSalmon};
  padding: 40px 0;
  text-align: center;
  width: 100vw;
  height: 298px;
  margin: 0;
  margin-left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  opacity: 1;

  p {
    margin-top: 32px;
    font-size: 10px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const SocialLinks = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 8px;

  a {
    display: inline-block;
    
    img {
      width: 24px;
      height: 24px;
    }
  }
`