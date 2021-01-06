// Core
import { useContext, useEffect } from 'react'
import styled from '@emotion/styled'

// Components
import { Navbar } from '../Navbar'
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'

// Actions
import { fetchChartData } from '../../init/actions'

// Instruments
import { ContextApp  } from '../../init/reducer'

// Types
import { ChartDataTypes } from '../../init/types'

type MainLayoutPropsTypes = {
  chartData: ChartDataTypes;
}

type WrapTypes = {
  isSidebarToggle: boolean;
}

// Styled component
const Wrap = styled('div')<WrapTypes>`
  width: 100%;
  height: 100%;
  padding-left: ${({ isSidebarToggle }) => isSidebarToggle ? '4rem' : '0'};
  transition: 0.5s;

  @media (min-width: 780px) {
    padding-left: ${({ isSidebarToggle }) => isSidebarToggle ? '11.7rem' : '4rem'};
  }
`

// Component
export function MainLayout({ chartData }: MainLayoutPropsTypes) {
  const { state: { sidebar }, dispatch } = useContext(ContextApp);

  useEffect(() => {
    dispatch(fetchChartData(chartData));
  }, []);

  return (
    <>
      <Wrap isSidebarToggle={sidebar}>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </Wrap>
    </>
  );
}
