import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmon};
  width: 320px;
  height: 338px;
  position: relative;
  opacity: 1;
`

export const Image = styled.img`
  width: 304px;
  height: 167px;
  margin: 8px;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: calc(100% - 183px);
`

export const Title = styled.h3`
  font-family: Roboto;
  font-weight: 900;
  font-style: normal;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${colors.lightSalmon};
  margin: 0;
`

export const Description = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: ${colors.lightSalmon};
  margin: 0;
  flex: 1;
`