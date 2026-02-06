import styled from 'styled-components'
import { colors } from '../../styles'

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000CC;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 1000;
  opacity: 1;
`

export const SidebarContainer = styled.div`
  width: 360px;
  height: 1624px;
  background-color: ${colors.salmon};
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  opacity: 1;
`

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 0 8px;
`

export const SidebarTitle = styled.h2`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  color: ${colors.lightSalmon};
  margin: 0;
`

export const CloseButton = styled.button`
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

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 0 8px;
`

export const CartItem = styled.div`
  background-color: ${colors.lightSalmon};
  padding: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ItemName = styled.h3`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  color: ${colors.salmon};
  margin: 0;
`

export const ItemPrice = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  color: ${colors.salmon};
  margin: 0;
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
  
  &:hover {
    opacity: 0.7;
  }
`

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 24px;
  padding: 0 8px;
`

export const TotalText = styled.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.lightSalmon};
  margin: 0;
`

export const TotalValue = styled.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.lightSalmon};
  margin: 0;
`

export const EmptyCart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  
  p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: ${colors.lightSalmon};
    margin: 0;
    text-align: center;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1px;
  
  button {
    width: 344px !important;
    height: 24px;
  }
`
