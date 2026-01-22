import styled from 'styled-components'
import { cores } from '../../styles'

// Adicionamos o $ na interface (transient prop)
interface CardProps {
  $variant: 'home' | 'profile'
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) =>
    props.$variant === 'home' ? cores.branca : cores.corSalmao};
  border: ${(props) =>
    props.$variant === 'home' ? `1px solid ${cores.corSalmao}` : 'none'};
  padding: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  color: ${(props) =>
    props.$variant === 'home' ? cores.corSalmao : cores.corDePeleFundo};

  img {
    width: 100%;
    display: block;
    height: 167px;
    object-fit: cover;
  }

  /* Estilização dos botões (Link ou Button) dentro do Card */
  button,
  a {
    align-self: ${(props) =>
      props.$variant === 'home' ? 'flex-start' : 'stretch'};
    width: ${(props) => (props.$variant === 'home' ? 'auto' : '100%')};
    background-color: ${(props) =>
      props.$variant === 'home' ? cores.corSalmao : cores.corDePeleFundo};
    color: ${(props) =>
      props.$variant === 'home' ? cores.corDePeleFundo : cores.corSalmao};
    border: none;
    padding: 4px 6px;
    font-weight: bold;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    margin-top: 8px;
    display: inline-block;
    text-align: center; /* Garante que o texto fique centralizado quando for 100% */
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px; /* Reduzi um pouco para não empurrar tanto o botão */
  margin-bottom: 8px;
  flex-grow: 1;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;

  &::after {
    content: '';
    width: 21px;
    height: 21px;
    background-image: url(../../assets/images/estrela.png);
    margin-left: 8px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
  }
`

export const TitleRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
