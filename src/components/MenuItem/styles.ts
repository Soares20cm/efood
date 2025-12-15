import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 8px;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 167px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemName = styled.h4`
  font-size: 16px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  line-height: 22px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;
