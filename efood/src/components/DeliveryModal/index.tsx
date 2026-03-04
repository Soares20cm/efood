import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { clear } from '../../store/reducers/cart'
import { checkout } from '../../services/api'
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
  const dispatch = useDispatch()
  const [step, setStep] = useState<'delivery' | 'payment' | 'success'>('delivery')
  const [orderId, setOrderId] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
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
  const [errors, setErrors] = useState({
    cep: '',
    number: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: ''
  })

  if (!isOpen) return null

  const total = items.reduce((acc: number, item: any) => {
    return acc + (item.price || 0)
  }, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let newValue = value
    let error = ''

    // Validações e máscaras
    switch (name) {
      case 'cep':
        // Remove tudo que não é número
        newValue = value.replace(/\D/g, '')
        // Limita a 8 dígitos
        newValue = newValue.slice(0, 8)
        // Valida se tem 8 dígitos
        if (newValue.length > 0 && newValue.length < 8) {
          error = 'CEP deve ter 8 dígitos'
        }
        break
      
      case 'number':
        // Apenas números
        newValue = value.replace(/\D/g, '')
        if (newValue.length === 0) {
          error = 'Número é obrigatório'
        }
        break
      
      case 'cardNumber':
        // Remove tudo que não é número
        newValue = value.replace(/\D/g, '')
        // Limita a 16 dígitos
        newValue = newValue.slice(0, 16)
        // Valida se tem 16 dígitos
        if (newValue.length > 0 && newValue.length < 16) {
          error = 'Número do cartão deve ter 16 dígitos'
        }
        break
      
      case 'cvv':
        // Apenas números
        newValue = value.replace(/\D/g, '')
        // Limita a 3 dígitos
        newValue = newValue.slice(0, 3)
        // Valida se tem 3 dígitos
        if (newValue.length > 0 && newValue.length < 3) {
          error = 'CVV deve ter 3 dígitos'
        }
        break
      
      case 'expiryMonth':
        // Apenas números
        newValue = value.replace(/\D/g, '')
        // Limita a 2 dígitos
        newValue = newValue.slice(0, 2)
        // Valida se está entre 01 e 12
        const month = parseInt(newValue)
        if (newValue.length === 2 && (month < 1 || month > 12)) {
          error = 'Mês deve estar entre 01 e 12'
        }
        break
      
      case 'expiryYear':
        // Apenas números
        newValue = value.replace(/\D/g, '')
        // Limita a 4 dígitos
        newValue = newValue.slice(0, 4)
        // Valida se é um ano válido (maior ou igual ao ano atual)
        const currentYear = new Date().getFullYear()
        const year = parseInt(newValue)
        if (newValue.length === 4 && year < currentYear) {
          error = 'Ano de vencimento inválido'
        }
        break
    }

    setFormData({
      ...formData,
      [name]: newValue
    })

    setErrors({
      ...errors,
      [name]: error
    })
  }

  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Valida todos os campos de entrega
    if (!formData.name.trim()) {
      alert('Por favor, preencha o nome de quem irá receber')
      return
    }

    if (!formData.address.trim()) {
      alert('Por favor, preencha o endereço')
      return
    }

    if (!formData.city.trim()) {
      alert('Por favor, preencha a cidade')
      return
    }

    if (formData.cep.length !== 8) {
      alert('CEP deve ter 8 dígitos')
      return
    }

    if (!formData.number.trim()) {
      alert('Por favor, preencha o número')
      return
    }

    setStep('payment')
  }

  const handleFinishOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Valida todos os campos de pagamento
    if (!formData.cardName.trim()) {
      alert('Por favor, preencha o nome no cartão')
      return
    }

    if (formData.cardNumber.length !== 16) {
      alert('Número do cartão deve ter 16 dígitos')
      return
    }

    if (formData.cvv.length !== 3) {
      alert('CVV deve ter 3 dígitos')
      return
    }

    const month = parseInt(formData.expiryMonth)
    if (formData.expiryMonth.length !== 2 || month < 1 || month > 12) {
      alert('Mês de vencimento inválido (deve estar entre 01 e 12)')
      return
    }

    const currentYear = new Date().getFullYear()
    const year = parseInt(formData.expiryYear)
    if (formData.expiryYear.length !== 4 || year < currentYear) {
      alert('Ano de vencimento inválido')
      return
    }

    setIsLoading(true)
    
    try {
      const payload = {
        products: items.map((item: any) => ({
          id: item.id,
          price: item.price || 0
        })),
        delivery: {
          receiver: formData.name,
          address: {
            description: formData.address,
            city: formData.city,
            zipCode: formData.cep,
            number: Number(formData.number),
            complement: formData.complement
          }
        },
        payment: {
          card: {
            name: formData.cardName,
            number: formData.cardNumber,
            code: Number(formData.cvv),
            expires: {
              month: Number(formData.expiryMonth),
              year: Number(formData.expiryYear)
            }
          }
        }
      }
      
      const response = await checkout(payload)
      setOrderId(response.orderId)
      setStep('success')
      dispatch(clear())
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error)
      alert('Erro ao finalizar pedido. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setStep('delivery')
    setOrderId('')
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
    setErrors({
      cep: '',
      number: '',
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
                  placeholder="00000000"
                  minLength={8}
                  maxLength={8}
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
                  placeholder="0000000000000000"
                  minLength={16}
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
                  placeholder="000"
                  minLength={3}
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
                  placeholder="01"
                  minLength={2}
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
                  placeholder="2024"
                  minLength={4}
                  maxLength={4}
                  required
                />
              </FormGroup>
            </InputRow>
            <ButtonGroup>
              <Button type="submit" title="Finalizar pagamento" disabled={isLoading}>
                {isLoading ? 'Processando...' : 'Finalizar pagamento'}
              </Button>
              <Button type="button" title="Voltar" onClick={() => setStep('delivery')} disabled={isLoading}>
                Voltar para a edição de endereço
              </Button>
            </ButtonGroup>
          </Form>
        )}

        {step === 'success' && (
          <div style={{ padding: '24px' }}>
            <Title>Pedido realizado - {orderId}</Title>
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
