import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'title' | 'food'>>`
  padding: 80px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? colors.lightSalmon : colors.beige};
  position: relative;
  z-index: 1;
  margin-bottom: 0;

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 24px;
  padding: 48px 16px 72px;
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
  justify-items: center;
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: 468px;
    gap: 32px;
    width: 468px;
    height: auto;
  }
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: auto;
    
    li > div {
      width: 100%;
      max-width: 468px;
    }
  }
`