import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000CC;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 1;
`

export const ModalContainer = styled.div`
  width: 1024px;
  background-color: ${colors.salmon};
  padding: 32px;
  position: relative;
  display: flex;
  gap: 24px;
  align-items: flex-start;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 24px;
  color: ${colors.lightSalmon};
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.7;
  }
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 24px;
`

export const ProductTitle = styled.h2`
  font-family: Roboto;
  font-weight: 900;
  font-style: normal;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${colors.lightSalmon};
  margin: 0;
`

export const ProductDescription = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: ${colors.lightSalmon};
  margin: 0;
`

export const ButtonContainer = styled.div`
  margin-top: 16px;
`