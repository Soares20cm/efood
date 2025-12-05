import styled, { css } from 'styled-components';

interface StyledButtonProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
}

const sizeStyles = {
  small: css`
    padding: 6px 16px;
    font-size: 14px;
  `,
  medium: css`
    padding: 8px 24px;
    font-size: 16px;
  `,
  large: css`
    padding: 12px 32px;
    font-size: 18px;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 4px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  ${({ size }) => sizeStyles[size]}
  
  ${({ variant, theme }) =>
    variant === 'primary'
      ? css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          
          &:hover:not(:disabled) {
            background-color: #d45555;
          }
        `
      : css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text};
          
          &:hover:not(:disabled) {
            background-color: #ffd9b3;
          }
        `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ size }) => 
      size === 'large' ? '10px 24px' : 
      size === 'medium' ? '8px 20px' : 
      '6px 12px'};
    font-size: ${({ size }) => 
      size === 'large' ? '16px' : 
      size === 'medium' ? '14px' : 
      '12px'};
  }
`;
