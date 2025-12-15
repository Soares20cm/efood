import { RestaurantCard } from '../../components/RestaurantCard';
import { restaurants } from '../../data/restaurants';
import { 
  HomeContainer, 
  Hero, 
  HeroContent,
  HeroTitle, 
  HeroSubtitle, 
  RestaurantsSection,
  RestaurantsGrid 
} from './styles';

export const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroContent>
          <HeroTitle>efood</HeroTitle>
          <HeroSubtitle>
            Viva experiências gastronômicas<br />
            no conforto da sua casa
          </HeroSubtitle>
        </HeroContent>
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
