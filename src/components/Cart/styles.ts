import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 360px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 32px 8px 16px 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px 8px 16px 8px;
  }
`;

export const CartTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  padding: 4px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const CartContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 8px;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.h4`
  font-size: 18px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 16px 0;
`;

export const ItemPrice = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  margin: 0;
  line-height: 22px;
`;

export const ItemQuantity = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 22px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 0;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  margin-top: 40px;
`;

export const CartFooter = styled.div`
  padding: 40px 8px 8px 8px;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const TotalLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const TotalPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;
