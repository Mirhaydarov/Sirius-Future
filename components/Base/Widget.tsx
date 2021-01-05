// Core
import { ReactNode } from 'react'
import styled from '@emotion/styled'

// Types
import { widgetMoreInfoTypes } from '../../data/widgetData';

type WidgetPropsTypes = {
  imgSrc: string;
  imgAlt: string;
  isActive?: boolean;
  moreInfo?: widgetMoreInfoTypes [];
  children?: ReactNode;
}

type WrapTypes = {
  isActive?: boolean;
  minHeight?: string;
  isMoreInfo?: widgetMoreInfoTypes [];
}

type IconTypes = {
  width?: string;
}

// Styled components
const Wrap = styled('div')<WrapTypes>`
  display: grid;
  grid-template-areas: ${({ isMoreInfo }) => isMoreInfo ? "'icon body' 'more more'" : "'icon body'"};
  grid-template-columns: min-content 1fr;
  align-items: center;
  min-height: ${({ minHeight = '105px' }) => minHeight};
  background-color: ${({ isActive }) => isActive ? '#2E71F3;' : '#FFFFFF;'};
  padding: 15px;

  @media (min-width: 780px) {
    grid-area: ${({ isMoreInfo }) => isMoreInfo ? 'more' : 'auto'};
  }

  @media (min-width: 1400px) {
    width: 278px;
  }
`

const IconWrap = styled('div')`
  padding: 0.5rem;
  grid-area: icon;
`

const Icon = styled('img')<IconTypes>`
  width: ${({ width = 'auto'}) => width}
`

// Component
export function Widget(props: WidgetPropsTypes) {
  const { imgSrc, imgAlt, children, isActive, moreInfo } = props;

  return (
    <Wrap isActive={isActive} isMoreInfo={moreInfo} >
      <IconWrap>
        <Icon src={imgSrc} alt={imgAlt} />
      </IconWrap>
      { children }
    </Wrap>
  );
}