import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #fff8f2;
  padding: 40px 0;
  font-size: 14px;
  border-top: 1px solid #e0e0e0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    align-items: start;
  }

  p {
    grid-column: 1 / -1;
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #e0e0e0;
    color: #666;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      gap: 30px;
      text-align: center;
    }
  }
`

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 150px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      max-width: 120px;
    }
  }
`

export const SectionTitle = styled.h4`
  color: #e66767;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Link = styled.a`
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #e66767;
  }
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
`

export const SocialIcon = styled.a`
  color: #e66767;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #e66767;

  &:hover {
    background-color: #e66767;
    color: white;
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`
