import styled from 'styled-components'
import { cores } from '../../styles'

type ContainerProps = {
  $isOpen: boolean
}

export const CartContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  justify-content: flex-end;
  z-index: 100;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Sidebar = styled.aside`
  background-color: ${cores.corSalmao};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  .total {
    display: flex;
    justify-content: space-between;
    color: ${cores.corDePeleFundo};
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 16px;
    font-size: 14px;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.corDePeleFundo};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.corSalmao};
  }

  p {
    font-size: 14px;
    color: ${cores.corSalmao};
    margin-top: 8px;
  }

  .delete-button {
    background-image: url('https://raw.githubusercontent.com/gian-lopes/efood/main/src/assets/images/lixeira.png');
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`