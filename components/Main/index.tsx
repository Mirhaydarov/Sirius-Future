// Core
import styled from '@emotion/styled'

// Components
import { YandexChartWidget } from '../YandexChartWidget'
import { PaypalChartWidget } from '../PaypalChartWidget'

// Styled components
const MainWrap = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem;
  
  @media (min-width: 780px) {
    margin-left: 1.1rem;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    grid-gap: 1.2rem;
  }

  @media (min-width: 1500px) {
    justify-content: space-evenly;
  }
`

// Component
export function Main() {
  return (
    <MainWrap>
      <YandexChartWidget />
      <PaypalChartWidget />
    </MainWrap>
  )
}