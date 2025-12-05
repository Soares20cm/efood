import styled from 'styled-components';

export const RestaurantContainer = styled.div`
  min-height: calc(100vh - 80px - 72px);
`;

export const Banner = styled.div<{ $image: string }>`
  width: 100%;
  height: 300px;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: flex-end;
  padding: 40px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px 16px;
  }
`;

export const RestaurantInfo = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export const CuisineType = styled.p`
  font-size: 16px;
  margin: 0 0 8px 0;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const RestaurantName = styled.h1`
  font-size: 48px;
  font-weight: 900;
  margin: 0 0 12px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`;

export const Rating = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const MenuSection = styled.section`
  padding: 40px 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  animation: fadeInUp 0.6s ease-out 0.2s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
