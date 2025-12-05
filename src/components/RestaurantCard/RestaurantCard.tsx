import { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  ImageContainer, 
  RestaurantImage, 
  InfoContainer, 
  RestaurantName, 
  CuisineType, 
  Rating,
  FeaturedBadge 
} from './styles';

interface RestaurantCardProps {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
  featured?: boolean;
}

const RestaurantCardComponent = ({ 
  id, 
  name, 
  cuisine, 
  rating, 
  image, 
  featured 
}: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <Card>
        <ImageContainer>
          <RestaurantImage src={image} alt={name} loading="lazy" />
          {featured && <FeaturedBadge>Destaque</FeaturedBadge>}
        </ImageContainer>
        <InfoContainer>
          <RestaurantName>{name}</RestaurantName>
          <CuisineType>{cuisine}</CuisineType>
          <Rating>⭐ {rating}</Rating>
        </InfoContainer>
      </Card>
    </Link>
  );
};

export const RestaurantCard = memo(RestaurantCardComponent);
