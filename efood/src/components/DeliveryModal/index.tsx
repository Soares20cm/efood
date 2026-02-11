import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Button from '../Button'
import { 
  ModalOverlay, 
  ModalContainer, 
  CloseButton,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Title,
  Description,
  InputRow,
  SmallInput,
  CardNumberInput,
  CVVInput
} from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const DeliveryModal = ({ isOpen, onClose }: Props) => {
  const { items } = useSelector((state: RootState) => state.cart)
  const [step, setStep] = useState<'delivery' | 'payment' | 'success'>('delivery')
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: '',
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: ''
  })

  if (!isOpen) return null

  const total = items.reduce((acc: number, item: any) => {
    const price = item.price || 60.90
    return acc + price
  }, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handleFinishOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aqui você pode fazer uma chamada AJAX para a API
    setStep('success')
    
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  const handleClose = () => {
    setStep('delivery')
    setFormData({
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: ''
    })
    onClose()
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={handleClose}>×</CloseButton>
        
        {step === 'delivery' && (
          <Form onSubmit={handleContinueToPayment}>
            <Title>Entrega</Title>
            <FormGroup>
              <Label htmlFor="name">Quem irá receber</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="address">Endereço</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="city">Cidade</Label>
              <Input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <InputRow>
              <FormGroup>
                <Label htmlFor="cep">CEP</Label>
                <SmallInput
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="number">Número</Label>
                <SmallInput
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </InputRow>
            <FormGroup>
              <Label htmlFor="complement">Complemento (opcional)</Label>
              <Input
                type="text"
                id="complement"
                name="complement"
                value={formData.complement}
                onChange={handleInputChange}
              />
            </FormGroup>
            <ButtonGroup>
              <Button type="submit" title="Continuar com o pagamento">
                Continuar com o pagamento
              </Button>
              <Button type="button" title="Voltar" onClick={handleClose}>
                Voltar para o carrinho
              </Button>
            </ButtonGroup>
          </Form>
        )}

        {step === 'payment' && (
          <Form onSubmit={handleFinishOrder}>
            <Title>Pagamento - Valor a pagar R$ {total.toFixed(2).replace('.', ',')}</Title>
            <FormGroup>
              <Label htmlFor="cardName">Nome no cartão</Label>
              <Input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <InputRow>
              <FormGroup>
                <Label htmlFor="cardNumber">Número do cartão</Label>
                <CardNumberInput
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  maxLength={16}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="cvv">CVV</Label>
                <CVVInput
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  maxLength={3}
                  required
                />
              </FormGroup>
            </InputRow>
            <InputRow>
              <FormGroup>
                <Label htmlFor="expiryMonth">Mês de vencimento</Label>
                <SmallInput
                  type="text"
                  id="expiryMonth"
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleInputChange}
                  maxLength={2}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="expiryYear">Ano de vencimento</Label>
                <SmallInput
                  type="text"
                  id="expiryYear"
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleInputChange}
                  maxLength={4}
                  required
                />
              </FormGroup>
            </InputRow>
            <ButtonGroup>
              <Button type="submit" title="Finalizar pagamento">
                Finalizar pagamento
              </Button>
              <Button type="button" title="Voltar" onClick={() => setStep('delivery')}>
                Voltar para a edição de endereço
              </Button>
            </ButtonGroup>
          </Form>
        )}

        {step === 'success' && (
          <div style={{ padding: '24px' }}>
            <Title>Pedido realizado - ORDER_ID</Title>
            <Description>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </Description>
            <Description>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </Description>
            <Description>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </Description>
            <Description>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </Description>
            <Button type="button" title="Concluir" onClick={handleClose}>
              Concluir
            </Button>
          </div>
        )}
      </ModalContainer>
    </ModalOverlay>
  )
}

export default DeliveryModal
