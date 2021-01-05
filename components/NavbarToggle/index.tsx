// Core
import { useContext } from 'react'
import styled from '@emotion/styled'

// Actions
import { toggleSidebar } from '../../init/actions'

// Instruments
import { ContextApp } from '../../init/reducer'

// Types
type NavbarTogglePropsTypes = {
  iconSrc: string; 
  iconWidth: string; 
  alwaysDisplay?: boolean;
}

type ButtonTypes = NavbarTogglePropsTypes & {
  isSidebarToggle: boolean;
}

// Styled components
const Button = styled('button')<ButtonTypes>`
  display: ${({ isSidebarToggle, alwaysDisplay }) => 
    (!isSidebarToggle || alwaysDisplay) ? 'block' : 'none'};
  background-image: url(${({ iconSrc }) => iconSrc});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: ${({ iconWidth }) => iconWidth};
  background-position: center;
  padding: 0.7rem;
  cursor: pointer;
  border: none;
  transition: 0.4s;
  
  @media (min-width: 780px) {
    display: ${({ alwaysDisplay }) => alwaysDisplay ? 'block' : 'none'};
    position: absolute;
    top: ${({ isSidebarToggle }) => isSidebarToggle ? '25px' : 'unset'};
    right: ${({ isSidebarToggle }) => isSidebarToggle ? '15px' : '50%'};
    transform: translateX(${({ isSidebarToggle }) => isSidebarToggle ? '0' : '50%'});
  }
`

// Component
export function NavbarToggle(props: NavbarTogglePropsTypes) {
  const { iconSrc, iconWidth, alwaysDisplay } = props;
  const { state, dispatch } = useContext(ContextApp);
  const { sidebar } = state;

  const navbarHandler = () => dispatch(toggleSidebar(!sidebar));

  return (
    <Button
      iconSrc={iconSrc}
      iconWidth={iconWidth}
      alwaysDisplay={alwaysDisplay}
      onClick={navbarHandler}
      isSidebarToggle={sidebar}
    />
  );
}