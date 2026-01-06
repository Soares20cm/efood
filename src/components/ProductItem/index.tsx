import { useState } from 'react'
import { useDispatch } from 'react-redux' // Importação necessária

import Button from '../Button'
import { add, open } from '../../store/reducers/cart'

import { Card, Descricao, Titulo, Modal, ModalContent } from './styles'

type Props = {
  title: string
  description: string
  info: string
  image: string
  portion?: string
  price?: string
}

const ProductItem = ({
  title,
  description,
  info,
  image,
  portion,
  price
}: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch() // Hook para disparar ações

  // Função para adicionar ao carrinho e abrir a barra lateral
  const addToCart = () => {
    dispatch(
      add({
        title,
        image,
        price: price || '',
        id: Math.random() // Gera um ID temporário para o item no carrinho
      })
    )
    setIsVisible(false) // Fecha o modal de detalhes
    dispatch(open()) // Abre o carrinho (Sidebar)
  }

  return (
    <>
      <Card>
        <img src={image} alt={title || ''} />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button
          type="button"
          title="Clique para ver detalhes"
          onClick={() => setIsVisible(true)}
        >
          Mais detalhes
        </Button>
      </Card>

      {isVisible && (
        <Modal>
          <div className="overlay" onClick={() => setIsVisible(false)}></div>
          <ModalContent className="container">
            <img src={image} alt={title || ''} />
            <div>
              <h3>{title}</h3>
              <p>{info}</p>
              <p>Serve de: {portion || ''}</p>
              {/* ATUALIZAÇÃO: Clique agora chama a função addToCart */}
              <Button
                type="button"
                title="Adicionar ao carrinho"
                onClick={addToCart}
              >
                {`Adicionar ao carrinho - R$ ${price || ''}`}
              </Button>
            </div>
            <div
              className="close-icon"
              onClick={() => setIsVisible(false)}
              style={{
                cursor: 'pointer',
                fontSize: '28px',
                color: '#fff',
                position: 'absolute',
                top: '8px',
                right: '16px',
                fontWeight: 'bold'
              }}
            >
              &times;
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default ProductItem
