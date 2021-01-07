// Core
import styled from '@emotion/styled'

// Types
import { widgetMoreInfoTypes } from '../../data/widgetData';

type WidgetBodyPropsTypes = {
  title: string;
  desc?: string;
  descMore?: string;
  moreInfo?: widgetMoreInfoTypes [];
  isActive?: boolean;
}

type TitleTypes = {
  isActive?: boolean;
}

// Styled component
const Wrap = styled('div')`
  grid-area: body;
`

const Title = styled('h3')<TitleTypes>`
  color: ${({ isActive }) => isActive ? '#FFFFFF;' : '#6F6F6F;'}
  font-weight: 400;
  font-size: 0.72rem;
  letter-spacing: 1px;
`

const Desc = styled('p')`
  font-size: 1.45rem;

  & > span {
    font-size: 1rem;
  }
`

const MoreList = styled('ul')`
  grid-area: more;
  list-style-type: none;
`

const MoreItem = styled('li')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2;
  font-size: 0.7rem;

  :after {
    content: "";
    border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
    flex-grow: 1;
    order: 2;
  }
`
  
const MoreTitle = styled('p')`
  font-weight: 400;
  color: #6F6F6F;
  letter-spacing: 0.3px;
  margin-right: 0.3rem;
  order: 1;
`

const MoreLabel = styled('p')`
  margin-left: 0.3rem;
  order: 3;
`

// Component
export function WidgetBody(props: WidgetBodyPropsTypes) {
  const { title, desc, moreInfo, descMore, isActive } = props;

  return (
    <>
      <Wrap>
        <Title isActive={isActive}>{title}</Title>
        { !isActive && <Desc>{desc}{descMore && <span> {descMore}</span>}</Desc>}
      </Wrap>
      { 
        moreInfo && 
        <MoreList>
          { moreInfo.map(({ title, label }) => (
            <MoreItem key={title}>
              <MoreTitle>{title}</MoreTitle>
              <MoreLabel>{label}</MoreLabel>
            </MoreItem>
          )) }
        </MoreList> 
      }
    </>
  );
}