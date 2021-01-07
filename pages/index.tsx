// Core
import Head from 'next/head'
import Link from 'next/link'
import styled from '@emotion/styled'

// Styled components
export const Wrap = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LinkWrap = styled('a')`
  font-size: 0.7rem;
  border-radius: 4px;
  padding: 0.75rem;
  color: #000000;
  background-color: #FFFFFF;
  border: 1px solid transparent;
  cursor: pointer;

  :hover, :active {
    border: 1px solid #2E71F3;
  }
`

// Component
export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrap>
        <Link href='/students'><LinkWrap>Войти</LinkWrap></Link>
      </Wrap>
    </>
  );
}
