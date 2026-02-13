import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  width: 1024px;
  margin: 56px auto 30px auto;
  opacity: 1;
  background-color: ${colors.beige};
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  column-gap: 24px;
  row-gap: 24px;
  width: 1024px;
`