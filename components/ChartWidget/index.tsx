// Core
import { MouseEvent, useState, useEffect } from 'react'
import styled from '@emotion/styled'

// Components
import { Button } from '../Base'
import { Chart } from '../Chart'
import { ChartHeader } from '../ChartHeader'

// Utils
import { mockChartData } from '../../utils/mockChartData'
import { getSumOfProceeds, getCurrentMonthLength } from '../../utils'

// Types
import { ChartHeaderTypes } from '../ChartHeader'

type ChartWidgetPropsTypes = ChartHeaderTypes

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
  const [currentBtn, setCurrentBtn] = useState('День');
  const [data, setData] = useState([]);

  const formatter = new Intl.NumberFormat('ru');
  const proceedsSum = formatter.format(getSumOfProceeds(data));
  const trendingSum = getSumOfProceeds(data);

  useEffect(() => {
    setData(mockChartData(7));
  }, []);


  function mockData(value: string) {
    if (value === 'День') {
      setData(mockChartData(7));
    }

    if (value === 'Неделя') {
      setData(mockChartData(7, 'week'));
    }

    if (value === 'Месяц') {
      setData(mockChartData(getCurrentMonthLength()));
    }
  }

  function buttonHandler(event: MouseEvent<HTMLButtonElement>) {
    const element = event.target as HTMLButtonElement;
    const value = element.value;
    setCurrentBtn(value);
    mockData(value);
  }

  return (
    <>
      <Wrap>
        <ButtonWrap>
          <Button
            value='День'
            type='button'
            onClick={buttonHandler}
            isActive={currentBtn === 'День' ? true : false}>День</Button>
          <Button
            value='Неделя'
            type='button'
            onClick={buttonHandler}
            isActive={currentBtn === 'Неделя' ? true : false}>Неделя</Button>
          <Button
            value='Месяц'
            type='button'
            onClick={buttonHandler}
            isActive={currentBtn === 'Месяц' ? true : false}>Месяц</Button>
        </ButtonWrap>
        <ChartWrap>
          <ChartHeader {...props} desc={proceedsSum} trending={trendingSum}/>
          <Chart data={data} />
        </ChartWrap>
      </Wrap>
    </>
  );
}