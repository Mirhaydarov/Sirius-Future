// Core
import Link from 'next/link'

// Components
import { Wrap, LinkWrap } from './index'

// Component
const Trainers = () => (
  <Wrap>
    <h1>Тренеры</h1>
    <Link href='/students'><LinkWrap>Вернуться назад</LinkWrap></Link>
  </Wrap>
);

export default Trainers