import { useParams, Navigate } from 'react-router-dom';
import { MenuItem } from '../../components/MenuItem';
import { restaurants } from '../../data/restaurants';
import type { MenuItem as MenuItemType } from '../../types';
import {
  RestaurantContainer,
  Banner,
  BannerOverlay,
  RestaurantInfo,
  RestaurantName,
  CuisineType,
  Rating,
  MenuSection,
  MenuGrid,
} from './styles';

interface RestaurantProps {
  onAddToCart: (item: MenuItemType) => void;
}

export const Restaurant = ({ onAddToCart }: RestaurantProps) => {
  const { id } = useParams<{ id: string }>();
  
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return <Navigate to="/404" replace />;
  }

  return (
    <RestaurantContainer>
      <Banner $image={restaurant.banner}>
        <BannerOverlay>
          <RestaurantInfo>
            <CuisineType>{restaurant.cuisine}</CuisineType>
            <RestaurantName>{restaurant.name}</RestaurantName>
            <Rating>⭐ {restaurant.rating}</Rating>
          </RestaurantInfo>
        </BannerOverlay>
      </Banner>

      <MenuSection>
        <MenuGrid>
          {restaurant.menu.map((item) => (
            <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </MenuGrid>
      </MenuSection>
    </RestaurantContainer>
  );
};
