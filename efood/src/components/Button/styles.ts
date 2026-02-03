import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

type ButtonContainerProps = {
  variant: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${(props) => props.variant === 'primary' ? '#FFEBD9' : 'transparent'};
  color: ${(props) => props.variant === 'primary' ? colors.salmon : colors.salmon};
  font-family: Roboto;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  padding: 4px 6px;
  border: ${(props) => props.variant === 'secondary' ? `2px solid ${colors.salmon}` : 'none'};
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  width: 304px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`

export const LinkContainer = styled(Link)<ButtonContainerProps>`
  background-color: ${colors.salmon};
  color: ${colors.lightSalmon};
  font-family: Roboto;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  padding: 4px 6px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  width: 82px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`