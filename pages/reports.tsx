// Core
import Link from 'next/link'

// Components
import { Wrap, LinkWrap } from './index'

// Component
const Reports = () => (
  <Wrap>
    <h1>Отчеты</h1>
    <Link href='/students'><LinkWrap>Вернуться назад</LinkWrap></Link>
  </Wrap>
);

export default Reports