import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { 
  NotFoundContainer, 
  NotFoundContent, 
  NotFoundTitle, 
  NotFoundMessage 
} from './styles';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundMessage>
          Oops! A página que você está procurando não foi encontrada.
        </NotFoundMessage>
        <Link to="/">
          <Button variant="primary" size="large">
            Voltar para Home
          </Button>
        </Link>
      </NotFoundContent>
    </NotFoundContainer>
  );
};
