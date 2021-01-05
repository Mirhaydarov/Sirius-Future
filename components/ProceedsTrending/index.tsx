// Core
import styled from '@emotion/styled'

// Types
type ProceedsTrendingPropsTypes = {
  trending: number;
}

type IconTypes = {
  src: string;
  alt: string;
}

type PercentTypes = {
  type?: string;
}

// Styled component
const Wrap = styled('div')`
  display: flex;
  margin: auto 0 5px 12px;
`

const Icon = styled('img')<IconTypes>`
  width: 13.33;
  height: 8;
`

const Percent = styled('p')<PercentTypes>`
  font-size: 0.7rem;
  color: ${({ type = 'up' }) => type === 'up' ? '#52AD5B' : '#ED0F48'};
  margin-left: 4px;
`

// Component
export function ProceedsTrending({ trending }: ProceedsTrendingPropsTypes) {
  function trend(number: number) {
    if (Math.sign(number) === -1) {
      return (
        <>
          <Icon src='/images/icons/trending-up.svg' alt='Рост в процентах' />
          <Percent>{Math.abs(number)}%</Percent>
        </>
      );
    } else {
      return (
        <>
          <Icon src='/images/icons/trending-down.svg' alt='Падение в процентах' />
          <Percent type="down">{number}%</Percent>
        </>
      );
    }
  }

  return (
    <Wrap>
      {trend(trending)}
    </Wrap>
  );
}