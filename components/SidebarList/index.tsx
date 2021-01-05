// Core
import styled from '@emotion/styled'

// Components
import { SidebarItem } from '../SidebarItem'

// Instruments
import { sidebarData } from '../../data/sidebarData'

// Styled components
const List = styled('ul')`
  list-style-type: none;
  margin-top: 1.5rem;
  overflow: hidden;
`

// Component
export function SidebarList() {
  return (
    <List>
      {sidebarData.map((data) => <SidebarItem {...data} />)}
    </List>
  );
}
