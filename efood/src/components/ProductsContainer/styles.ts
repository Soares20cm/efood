import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  width: 1024px;
  margin: 56px auto 160px auto;
  opacity: 1;
  background-color: ${colors.beige};
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-template-rows: repeat(2, 338px);
  column-gap: 32px;
  row-gap: 32px;
  width: 1024px;
`