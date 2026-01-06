import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 56px 0 120px;
  background-color: transparent;

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`
