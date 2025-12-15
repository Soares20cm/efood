import { memo } from 'react';
import { Button } from '../Button';
import { 
  Card, 
  ImageContainer, 
  ItemImage, 
  InfoContainer, 
  ItemName, 
  ItemDescription, 
  PriceContainer,
  Price 
} from './styles';
import type { MenuItem as MenuItemType } from '../../types';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType) => void;
}

const MenuItemComponent = ({ item, onAddToCart }: MenuItemProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Card>
      <ImageContainer>
        <ItemImage src={item.image} alt={item.name} loading="lazy" />
      </ImageContainer>
      <InfoContainer>
        <ItemName>{item.name}</ItemName>
        <ItemDescription>{item.description}</ItemDescription>
        <PriceContainer>
          <Price>{formatPrice(item.price)}</Price>
          <Button onClick={() => onAddToCart(item)} size="small" variant="secondary">
            Adicionar ao carrinho
          </Button>
        </PriceContainer>
      </InfoContainer>
    </Card>
  );
};

export const MenuItem = memo(MenuItemComponent);
