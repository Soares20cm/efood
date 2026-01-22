import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.corDePeleFundoEscuro};
  padding: 40px 0;
  text-align: center;
`

export const LogoSection = styled.div`
  margin-bottom: 32px;

  img {
    width: 125px;
    height: 57.5px;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;
`

export const SocialIcon = styled.a`
  color: ${cores.corSalmao};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }
`

export const FooterText = styled.p`
  font-size: 10px;
  color: ${cores.corSalmao};
  line-height: 12px;
  max-width: 480px;
  margin: 0 auto;
`
