// Core
import styled from '@emotion/styled'

// Components
import { ChartWidget } from '../ChartWidget'

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
      <ChartWidget
        imgSrc='/images/yandex-logo.png'
        imgAlt='Яндекс касса'
        imgWidth='120'
        imgHeight='32'
        desc={30000}
        trending={30000}
      />
      <ChartWidget
        imgSrc='/images/paypal-logo.svg'
        imgAlt='Paypal'
        imgWidth='108'
        imgHeight='28'
        desc={50000}
        trending={50000}
      />
    </MainWrap>
  )
}