import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 217px;
  overflow: hidden;
`;

export const RestaurantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeaturedBadge = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
`;

export const InfoContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RestaurantInfo = styled.div`
  flex: 1;
`;

export const RestaurantName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 16px 0;
`;

export const CuisineType = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  line-height: 22px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Rating = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StarIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;
