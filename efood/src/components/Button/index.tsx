import { ButtonContainer, LinkContainer } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({ type, title, to, onClick, children, variant = 'primary' }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
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