import { FooterContainer, FooterContent, Logo, SocialLinks, FooterText } from './styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>efood</Logo>
        <SocialLinks>
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Twitter">🐦</a>
        </SocialLinks>
        <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade<br />
          dos produtos é toda do estabelecimento contratado.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};
