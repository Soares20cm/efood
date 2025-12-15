import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: calc(100vh - 80px - 72px);
  display: flex;
  flex-direction: column;
`;

export const Hero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  text-align: center;
  position: relative;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 40px 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  text-align: center;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const RestaurantsSection = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const RestaurantsGrid = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 16px;
    gap: 32px;
  }
`;
