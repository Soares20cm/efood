import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  position: relative;
  padding: 0;
  width: 468px;
  height: 478px;
  margin: 0 auto 48px auto;
  display: flex;
  flex-direction: column;

  > div:nth-child(2) {
    padding: 10px;
    color: rgb(230, 103, 103);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > a {
    position: absolute;
    bottom: 6px;
    left: 6px;
    width: 82px;
    height: 24px;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 217px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;

  span {
    background-color: ${colors.salmon};
    color: ${colors.lightYellow};
    font-size: 12px;
    font-weight: bold;
    padding: 6px 4px;
    text-align: center;
    min-width: 60px;
  }
`

export const Titulo = styled.h3`
  font-family: Roboto;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0%;
  color: ${colors.salmon};
  margin: 0;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
    font-size: 18px;
    color: ${colors.salmon};
  }
`

export const StarIcon = styled.span`
  img {
    width: 21px;
    height: 21px;
  }
`

export const Descricao = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0%;
  color: rgb(230, 103, 103);
  margin: 0;
  padding: 0 10px 5px 10px;
  text-align: justify;
  overflow: hidden;
`