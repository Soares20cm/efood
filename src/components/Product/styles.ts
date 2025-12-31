import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: #fff8f2;
  border-radius: 9px;
  width: 100%;
  max-width: 472px;
  height: auto;
  min-height: 398px;
  padding: 0 20px 20px 20px;
  margin-bottom: 24px;
  position: relative;
  border: 1px solid transparent;
  opacity: 1;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto 20px auto;

    img {
      height: 180px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 15px 15px 15px;
    min-height: 350px;

    img {
      height: 160px;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 210px;
  margin-bottom: 8px;
  color: #e66767;
  padding: 0 10px;

  @media (max-width: 768px) {
    margin-top: 190px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 170px;
    font-size: 14px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: -webkit-box;
  margin-top: 16px;
  color: #e66767;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
    -webkit-line-clamp: 2;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
