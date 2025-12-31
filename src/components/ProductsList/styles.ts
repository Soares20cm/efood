import styled from 'styled-components'

import { Props } from '.'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'food'>>`
  padding: 32px 20px;
  background-color: #fff8f2;
  min-height: 100vh;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  ${Card} {
    background-color: #fff8f2;
    width: 100%;
    max-width: 472px;
    height: auto;
    min-height: 398px;
    padding: 0 20px 20px 20px;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 472px));
  gap: 24px;
  margin-top: 40px;
  justify-content: center;
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 20px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #e66767;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 15px;
  }
`
