import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.lightSalmon};
  padding: 40px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 20px;
  }
`