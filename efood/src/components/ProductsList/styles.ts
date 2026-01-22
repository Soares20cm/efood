import styled from 'styled-components'

type ContainerProps = {
  $background: 'beige' | 'white'
}

export const Container = styled.section<ContainerProps>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.$background === 'beige' ? '#FFF8F2' : '#FFF'};

  h2 {
    display: none;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  list-style: none;

  @media (max-width: 1024px) {
    column-gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
