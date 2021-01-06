// Core
import { useContext, ReactNode } from 'react'
import styled from '@emotion/styled'

// Instruments
import { ContextApp  } from '../../init/reducer'

// Types
type MainLayoutPropsTypes = {
  children: ReactNode;
}

type WrapTypes = {
  isSidebarToggle: boolean;
}

// Styled component
const Wrap = styled('div')<WrapTypes>`
  width: 100%;
  height: 100%;
  padding-left: ${({ isSidebarToggle }) => isSidebarToggle ? '4rem' : '0'};
  transition: 0.5s;

  @media (min-width: 780px) {
    padding-left: ${({ isSidebarToggle }) => isSidebarToggle ? '11.7rem' : '4rem'};
  }
`

// Component
export function MainLayout({ children }: MainLayoutPropsTypes) {
  const { state: { sidebar } } = useContext(ContextApp);

  return (
    <>
      <Wrap isSidebarToggle={sidebar}>
        { children }
      </Wrap>
    </>
  );
}
