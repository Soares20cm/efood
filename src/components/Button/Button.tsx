import { memo } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const ButtonComponent = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  ...props 
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export const Button = memo(ButtonComponent);
