// Core
import { MouseEvent, useState } from 'react'
import styled from '@emotion/styled'

// Components
import { Button } from '../Base'
import { Chart } from '../Chart'
import { ChartHeader } from '../ChartHeader'

// Hooks
import { useChartData } from './hooks/useChartData'
import { useMockData } from './hooks/useMockData'

// Types
import { ChartHeaderTypes } from '../ChartHeader'

type ChartWidgetPropsTypes = ChartHeaderTypes & {
  type: 'yandex' | 'paypal';
}

// Styled components
const Wrap = styled('div')`
  width: 230px;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    width: 100%;
  }

  @media (min-width: 780px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 470px;
  }

  @media (min-width: 1300px) {
    width: 525px;
  }

  @media (min-width: 1400px) {
    width: 575px;
  }
`

const ButtonWrap = styled('div')`
  display: flex;
  margin-bottom: 0.6rem;
`

const ChartWrap = styled('div')`
  background-color: #FFFFFF;
  padding: 1rem;
  min-height: 315px;
`

// Component
export function ChartWidget(props: ChartWidgetPropsTypes) {
  const { type } = props;

  const [currentBtn, setCurrentBtn] = useState('День');
  const { data, proceedsSum, trendingSum } = useChartData(type, currentBtn)
  const { mockDataHandler } = useMockData();

  function currentButton(event: MouseEvent<HTMLButtonElement>) {
    const element = event.target as HTMLButtonElement;
    const value = element.value;
    setCurrentBtn(value);
  }

  function currentButtonHandler(event: MouseEvent<HTMLButtonElement>) {
    currentButton(event);
  }

  return (
    <>
      <Wrap>
        <ButtonWrap>
          <Button
            value='День'
            type='button'
            onClick={currentButtonHandler}
            isActive={currentBtn === 'День' ? true : false}>День</Button>
          <Button
            value='Неделя'
            type='button'
            onClick={currentButtonHandler}
            isActive={currentBtn === 'Неделя' ? true : false}>Неделя</Button>
          <Button
            value='Месяц'
            type='button'
            onClick={currentButtonHandler}
            isActive={currentBtn === 'Месяц' ? true : false}>Месяц</Button>
          <Button
            value='Новые данные'
            type='button'
            onClick={() => mockDataHandler(type)}
            isActive={currentBtn === 'Новые данные' ? true : false}>Новые данные</Button>
        </ButtonWrap>
        <ChartWrap>
          <ChartHeader {...props} desc={proceedsSum} trending={trendingSum}/>
          <Chart data={data} />
        </ChartWrap>
      </Wrap>
    </>
  );
}