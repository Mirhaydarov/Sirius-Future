// Core
import { useContext } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

// Components
import { ProceedsTrending } from '../ProceedsTrending'

// Instruments
import { ContextApp } from '../../init/reducer'
import { trendingPercent } from '../../utils'

// Types
export type ChartHeaderTypes = {
  imgSrc: string;
  imgAlt: string;
  imgWidth: string;
  imgHeight: string;
  desc: number | string;
  trending: number,
}

// Styled components
const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.3rem;
`

const ProceedsWrap = styled('div')`
  display: flex;
`

const ProceedsTitle = styled('h3')`
  font-size: 0.8rem;
  font-weight: 400;
  color: #6F6F6F;
`

const ProceedsDesc = styled('p')`
  font-size: 1.4rem;
  font-weight: 500;
`

const ProceedsDescCurrency = styled('span')`
  font-size: 1rem;
`

const ImageWrap = styled('div')`
`

// Component
export function ChartHeader(props: ChartHeaderTypes) {
  const { imgSrc, imgAlt, imgWidth, imgHeight, desc, trending } = props;
  const { state: { maxProceeds } } = useContext(ContextApp);

  const sum = trendingPercent(trending, maxProceeds);

  return (
    <Header>
      <ProceedsWrap>
        <div>
          <ProceedsTitle>Выручка:</ProceedsTitle>
          <ProceedsDesc>{desc}
            <ProceedsDescCurrency>
              &nbsp;руб.
            </ProceedsDescCurrency>
          </ProceedsDesc>
        </div>
        <ProceedsTrending trending={sum} />
      </ProceedsWrap>
      <ImageWrap>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
        />
      </ImageWrap>
    </Header>
  );
}