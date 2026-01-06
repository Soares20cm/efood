import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.corSalmao};
  padding: 8px;
  display: flex;
  flex-direction: column;
  color: ${cores.corDePeleFundo};

  img {
    width: 100%;
    display: block;
    height: 167px;
    object-fit: cover;
  }

  button {
    width: 100%;
    /* Remova 'height' se houver */
    background-color: ${cores.corDePeleFundo};
    color: ${cores.corSalmao};
    border: none;
    padding: 8px 4px; /* Aumentamos um pouco a altura interna */
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    margin-top: 8px;
    display: block;
    
    /* Garante que o texto fique centralizado e visível */
    text-align: center;
    line-height: normal; 
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
  flex-grow: 1;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: ${cores.corSalmao};
  padding: 32px;
  display: flex;
  color: ${cores.branca};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 16px;
    }
    
    button {
      background-color: #FFEBD9; /* Cor exata do Figma */
      color: ${cores.corSalmao}; /* O texto dentro deve ser o vermelho/salmão */
      border: none;
      padding: 4px 12px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      width: fit-content;
      margin-top: 8px;
      display: inline-block;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${cores.branca}; /* Um leve efeito ao passar o mouse */
      }
    }
  }

  .close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`

