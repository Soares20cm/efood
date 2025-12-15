import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 40px 0;
`;

export const HeaderContent = styled.div<{ $isHomePage?: boolean }>`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: ${({ $isHomePage }) => $isHomePage ? 'center' : 'space-between'};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 16px;
    flex-direction: column;
    gap: 16px;
  }
`;

export const RestaurantsLink = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  
  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const Logo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  position: relative;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;
