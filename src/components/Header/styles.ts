import styled from 'styled-components'

export const HeaderBar = styled.header`
  background-color: #fff8f2;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  a {
    color: #e66767;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;

    &:hover {
      color: #d55555;
    }
  }

  img {
    max-width: 125px;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 20px;
    flex-direction: column;
    gap: 16px;

    img {
      max-width: 100px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    img {
      max-width: 80px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: 480px) {
    margin-right: 12px;
  }
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  color: #e66767;
  font-weight: bold;

  img {
    margin-left: 16px;
    max-width: 24px;
    height: auto;
  }

  @media (max-width: 480px) {
    font-size: 14px;

    img {
      margin-left: 12px;
      max-width: 20px;
    }
  }
`
