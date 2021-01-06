// Core
import Link from 'next/link'

// Components
import { Wrap, LinkWrap } from './index'

// Component
const Finance = () => (
  <Wrap>
    <h1>Финансы</h1>
    <Link href='/students'><LinkWrap>Вернуться назад</LinkWrap></Link>
  </Wrap>
);

export default Finance