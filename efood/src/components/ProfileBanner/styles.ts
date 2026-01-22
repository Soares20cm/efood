import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 32px;
  }
`

export const BannerContent = styled.div`
  margin-top: auto;
`

export const Category = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branca};
  margin-bottom: 156px;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branca};
`
