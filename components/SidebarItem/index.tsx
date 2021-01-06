// Core
import { useContext } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

// Instruments
import { ContextApp } from '../../init/reducer'

// Types
type SidebarItemPropsTypes = {
  title: string;
  path: string;
  icon: string;
  currentPage: boolean;
}

type ItemTypes= {
  tabIndex: number;
  currentPage: boolean;
}

type ItemLabelTypes = {
  isSidebarToggle: boolean;
}

type ItemLinkTypes = ItemLabelTypes & {
  currentPage: boolean;
}

// Styled components
const Item = styled('li')<ItemTypes>`
  color: #6F6F6F;
  margin-top: 2px;
  border-left: 3px solid ${({ currentPage }) => currentPage ? '#2E71F3' : 'transparent'};
  
  :hover {
    border-left: 3px solid #2E71F3;
  }
`

const ItemLink = styled('a')<ItemLinkTypes>`
  display: flex;
  font-size: 0.8rem;
  background: ${({ currentPage }) => currentPage ? '#EDF0F5' : 'transparent'};
  color:${({ currentPage }) => currentPage ? '#000000' : 'inherit'};
  padding: ${({ isSidebarToggle }) => 
    isSidebarToggle ? '0.6rem' : '0.78rem 0.6rem'};
  cursor: pointer;
  
  :hover, :focus {
    background: #EDF0F5;
    color: #000000;
  }
`

const ItemIcon = styled('img')`
  padding: 0 0.5rem 0 1rem;
`

const ItemLabel= styled('span')<ItemLabelTypes>`
  display: none;

  @media (min-width: 780px) {
    display: ${({ isSidebarToggle }) => 
      isSidebarToggle ? 'block' : 'none'};
  }
`

// Component
export function SidebarItem(props: SidebarItemPropsTypes) {
  const { title, path, icon, currentPage } = props;
  
  const { state } = useContext(ContextApp);
  const { sidebar } = state;

  return (
    <Item key={title} tabIndex={0} currentPage={currentPage}>
      <Link href={`/${path}`}>
        <ItemLink isSidebarToggle={sidebar} currentPage={currentPage}>
          <ItemIcon src={icon} alt={title}>
          </ItemIcon>
          <ItemLabel
            isSidebarToggle={sidebar}
          >
            {title}
          </ItemLabel>
        </ItemLink>
      </Link>
    </Item>
  );
}
