// Core
import { useContext } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'

// Components
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

// Instruments
import { ContextApp  } from '../init/reducer'

// Types
type WrapTypes = {
  isSidebarToggle: boolean;
}

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
export default function Index() {
  const { state: { sidebar } } = useContext(ContextApp);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrap isSidebarToggle={sidebar}>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </Wrap>
    </>
  );
}
