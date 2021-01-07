// Core
import Link from 'next/link'

// Components
import { Wrap, LinkWrap } from './index'
import { Navbar } from '../components/Navbar'

// Component
const Lessons = () => (
  <>
    <Navbar />
    <Wrap>
      <h1>Занятия</h1>
      <Link href='/students'><LinkWrap>Вернуться назад</LinkWrap></Link>
    </Wrap>
  </>
);

export default Lessons