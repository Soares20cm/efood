import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
`;

export const NotFoundContent = styled.div`
  text-align: center;
  max-width: 600px;
`;

export const NotFoundTitle = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 6rem;
  }
`;

export const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 2rem 0 3rem;
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    margin: 1.5rem 0 2rem;
  }
`;
