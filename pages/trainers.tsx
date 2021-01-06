// Core
import Link from 'next/link'

// Components
import { Wrap, LinkWrap } from './index'
import { MainLayout } from '../components/MainLayout'
import { Navbar } from '../components/Navbar'

// Component
const Trainers = () => (
  <MainLayout>
    <Navbar />
    <Wrap>
      <h1>Тренеры</h1>
      <Link href='/students'><LinkWrap>Вернуться назад</LinkWrap></Link>
    </Wrap>
  </MainLayout>
);

export default Trainers