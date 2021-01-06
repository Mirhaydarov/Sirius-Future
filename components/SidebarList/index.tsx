// Core
import styled from '@emotion/styled'

// Components
import { SidebarItem } from '../SidebarItem'

// Instruments
import { sidebarData } from '../../data/sidebarData'
import { useContext } from 'react'
import { ContextApp } from '../../init/reducer'

// Styled components
const List = styled('ul')`
  list-style-type: none;
  margin-top: 1.5rem;
  overflow: hidden;
`

// Component
export function SidebarList() {
  const { state: { currentPage }} = useContext(ContextApp);

  return (
    <List>
      {sidebarData.map((data) => <SidebarItem currentPage={currentPage === 'students' ? 'true' : ''} key={data.title} {...data} />)}
    </List>
  );
}
