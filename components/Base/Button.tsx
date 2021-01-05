// Core
import { MouseEvent } from 'react'
import styled from '@emotion/styled'

// Types
type ButtonTypes = 'submit' | 'button' | 'reset';

type PropTypes = {
  children: Element | string;
  type: ButtonTypes;
  value?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  disabled?: boolean;
};

type WrapTypes = {
  value?: string;
  isActive?: boolean;
  disabled?: boolean;
}

// Styled component
const Wrap = styled('button')<WrapTypes>`
  font-size: 0.7rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  padding: 0.75rem;
  color: ${({ isActive }) => isActive ? '#000000' : '#6F6F6F'};
  background-color: ${({ isActive }) => isActive ? '#FFFFFF' : 'transparent'};
  border: 1px solid ${({ isActive }) => isActive ? 'transparent' : `rgba(0, 0, 0, 0.1)`};
  cursor: pointer;

  :hover, :active {
    border: 1px solid #2E71F3;
  }

  :disabled {
    color: #FFFFFF;
    background-color: #EC4A4A;
  }
`

// Component
export function Button(props: PropTypes) {
  const {
    children,
    type,
    value,
    onClick,
    isActive,
    disabled,
  } = props;

  return (
    <Wrap
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      isActive={isActive}
    >
      {children}
    </Wrap>
  );
};

