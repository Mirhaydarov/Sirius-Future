// Core
import Link from 'next/link'

// Components
import { Wrap, LinkWrap } from './index'
import { Navbar } from '../components/Navbar'

// Component
const Trainers = () => (
  <>
    <Navbar />
    <Wrap>
      <h1>Тренеры</h1>
      <Link href='/students'><LinkWrap>Вернуться назад</LinkWrap></Link>
    </Wrap>
  </>
);

export default Trainers