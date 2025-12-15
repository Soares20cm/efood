import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 40px 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 16px;
    gap: 24px;
  }
`;

export const Logo = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  
  a {
    font-size: 24px;
    text-decoration: none;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
  margin: 0;
  line-height: 12px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 9px;
    br {
      display: none;
    }
  }
`;
