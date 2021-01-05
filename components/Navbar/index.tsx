// Core
import { useContext } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

// Components
import { SidebarList } from '../SidebarList'
import { NavbarToggle } from '../NavbarToggle'

// Instruments
import { ContextApp } from '../../init/reducer'

// Types
type WrapTypes = {
  width?: number | string;
  toggledWidth? : number | string;
  isSidebarToggle: boolean;
}

type NavLogoLinkTypes = {
  isSidebarToggle: boolean;
}

// Styled components
const Wrap = styled('article')<WrapTypes>`
  width: ${({ width = 'auto' }) => width};
  height: 100%;
  position: fixed;
  top: 0;
  left: ${({ isSidebarToggle, width }) => isSidebarToggle ? 0 : `-${width}`};
  background-color: #ffffff;
  box-shadow: 0 0 1px black;
  transition: 0.5s;

  @media (min-width: 780px) {
    left: 0;
    width: ${({ isSidebarToggle, toggledWidth, width = 'auto' }) => isSidebarToggle ? toggledWidth : width};
  }
`

const NavBox = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 3.4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (min-width: 780px) {
    min-height: 7.3rem;
  }
`

const NavLogoLink = styled('a')<NavLogoLinkTypes>`
  display: none;

  @media (min-width: 780px) {
    display: ${({ isSidebarToggle }) => isSidebarToggle ? 'block' : 'none'};
    cursor: pointer;
  }
`

const NavLogo = styled('img')`
  width: 120px;
  height: 69px;
  max-width: 100%;
`

export function Navbar() {
  const { state } = useContext(ContextApp);
  const { sidebar } = state;

  return (
    <Wrap 
      width='4rem'
      toggledWidth='11.7rem'
      isSidebarToggle={sidebar}
    >
      <nav>
        <NavBox>
          <Link href="/">
            <NavLogoLink
              isSidebarToggle={sidebar}
            >
              <NavLogo
                src="/images/logo.svg"
                alt="Sirius Future"
              />
            </NavLogoLink>
          </Link>
          <NavbarToggle
            iconSrc='/images/icons/hide-bar-icon.svg'
            iconWidth='0.8rem'
            alwaysDisplay
          />
        </NavBox>
        <SidebarList />
      </nav>
    </Wrap>
  );
}