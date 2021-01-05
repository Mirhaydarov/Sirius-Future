// Core
import Image from 'next/image'
import styled from '@emotion/styled'

// Styled components
const Wrap = styled('div')`
  display: flex;
  position: relative;
`

const FullName = styled('p')`
  margin-right: 0.6rem;
  font-size: 0.6rem;
  letter-spacing: 0.8px;
  display: none;

  @media (min-width: 780px) {
    display: block;
  }
`

const Notify = styled('button')`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
  margin-right: 1rem;

  :after {
    content: '';
    position: absolute;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    height: 2.4rem;
    top: 0;
    left: 2.1rem;
  }
`

const UserBox = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 30px;
`

// Component
export function User() {
  return (
    <Wrap>
      <Notify>
        <img src='/images/notify.svg' alt="Уведомления" />
      </Notify>
      <UserBox>
        <FullName>Alexander Gerasimuk</FullName>
        <Image src='/images/avatar.png' width={43} height={43} alt='Alexander Gerasimuk' />
      </UserBox>
    </Wrap>
  );
}