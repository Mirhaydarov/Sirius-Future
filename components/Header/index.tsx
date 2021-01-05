// Core
import styled from '@emotion/styled'

// Components
import { NavbarToggle } from '../NavbarToggle';
import { SearchBar } from '../SearchBar';
import { User } from '../User';

// Styled components
const HeaderWrap = styled('header')`
  display: flex;
  justify-content: space-between;
  padding-top: 0.2rem;
  box-shadow: 0 0 1px black;

  @media (min-width: 780px) {
    box-shadow: none;
    padding: 1.3rem 0 0.6rem 0;
  }
`

// Component
export function Header() {
  return (
    <HeaderWrap>
      <NavbarToggle iconSrc='/images/burger-menu.svg' iconWidth='1rem' />
      <SearchBar placeholder='Поиск клиента' />
      <User />
    </HeaderWrap>
  );
}