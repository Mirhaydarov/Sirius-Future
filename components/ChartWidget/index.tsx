// Core
import { MouseEvent, useContext, useState } from 'react'
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
import { ContextApp } from '../../init/reducer'

type ChartWidgetPropsTypes = ChartHeaderTypes & {
  type: 'yandex' | 'paypal';
}

type WrapTypes = {
  isToggled: boolean;
}

// Styled components
const Wrap = styled('div')<WrapTypes>`
  width: 250px;
  margin-bottom: 1rem;
  transition: 0.3s;
  overflow: hidden;

  @media (min-width: 400px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: ${({ isToggled }) => isToggled ? '50%' : '100%'};
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

  const { state: { sidebar } } = useContext(ContextApp);
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
      <Wrap isToggled={sidebar}>
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