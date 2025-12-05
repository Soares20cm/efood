import { RestaurantCard } from '../../components/RestaurantCard';
import { restaurants } from '../../data/restaurants';
import { 
  HomeContainer, 
  Hero, 
  HeroTitle, 
  HeroSubtitle, 
  RestaurantsSection,
  RestaurantsGrid 
} from './styles';

export const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroTitle>efood</HeroTitle>
        <HeroSubtitle>
          Descubra os melhores restaurantes e peça sua comida favorita
        </HeroSubtitle>
      </Hero>
      
      <RestaurantsSection>
        <RestaurantsGrid>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              image={restaurant.image}
              featured={restaurant.featured}
            />
          ))}
        </RestaurantsGrid>
      </RestaurantsSection>
    </HomeContainer>
  );
};
