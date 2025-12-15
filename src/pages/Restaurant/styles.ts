import styled from 'styled-components';

export const RestaurantContainer = styled.div`
  min-height: calc(100vh - 80px - 72px);
`;

export const Banner = styled.div<{ $image: string }>`
  width: 100%;
  height: 280px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 25px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 200px;
    padding: 16px 0;
  }
`;

export const RestaurantInfo = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 16px;
  }
`;

export const CuisineType = styled.p`
  font-size: 32px;
  font-weight: 100;
  margin: 0 0 156px 0;
  opacity: 0.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
    margin: 0 0 80px 0;
  }
`;

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const MenuSection = styled.section`
  padding: 56px 0 120px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MenuGrid = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`;
