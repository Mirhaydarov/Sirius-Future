// Core
import Link from 'next/link'

// Components
import { Wrap, LinkWrap } from './index'

// Component
const Mailings = () => (
  <Wrap>
    <h1>Рассылки</h1>
    <Link href='/students'><LinkWrap>Вернуться назад</LinkWrap></Link>
  </Wrap>
);

export default Mailings