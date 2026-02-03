import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'title' | 'food'>>`
  padding: 80px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? colors.lightSalmon : colors.beige};
  position: relative;
  z-index: 1;
  margin-bottom: 250px;

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  gap: 80px 32px;
  width: 1024px;
  height: 1290px;
  margin: 0 auto;
  justify-content: space-between;
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: 472px;
    gap: 32px;
    width: 472px;
    height: auto;
  }
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: auto;
    
    li > div {
      width: 100%;
      max-width: 472px;
    }
  }
`