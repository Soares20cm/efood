import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  width: 1024px;
  height: 708px;
  margin: 56px auto 160px auto;
  opacity: 1;
  background-color: ${colors.beige};
  padding: 56px 0;
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 32px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`