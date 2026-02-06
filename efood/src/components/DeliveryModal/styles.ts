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
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 1001;
  opacity: 1;
`

export const ModalContainer = styled.div`
  width: 360px;
  height: 1624px;
  background-color: ${colors.salmon};
  padding: 32px 8px;
  position: fixed;
  right: 0;
  top: 0;
  overflow-y: auto;
  opacity: 1;
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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.lightSalmon};
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${colors.lightSalmon};
  background-color: ${colors.lightSalmon};
  color: ${colors.salmon};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  
  &:focus {
    outline: none;
    border-color: ${colors.white};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  padding: 0 1px;
  
  button {
    width: 344px !important;
    height: 24px;
  }
`

export const InputRow = styled.div`
  display: flex;
  gap: 29px;
  
  > div {
    flex: 1;
  }
`

export const SmallInput = styled(Input)`
  width: 155px;
  height: 32px;
`

export const CardNumberInput = styled(Input)`
  width: 228px;
  height: 32px;
`

export const CVVInput = styled(Input)`
  width: 87px;
  height: 32px;
`

export const Title = styled.h2`
  font-family: Roboto;
  font-weight: 900;
  font-style: normal;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${colors.lightSalmon};
  margin: 0 0 16px 0;
`

export const Description = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: ${colors.lightSalmon};
  margin: 0 0 16px 0;
`
