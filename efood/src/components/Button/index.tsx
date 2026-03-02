import { ButtonContainer, LinkContainer } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({ type, title, to, onClick, children, variant = 'primary', disabled = false }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <LinkContainer to={to || ''} title={title} variant={variant}>
      {children}
    </LinkContainer>
  )
}

export default Button