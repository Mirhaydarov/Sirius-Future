// Core
import Link from 'next/link'

// Components
import { Wrap, LinkWrap } from './index'

// Component
const CRM = () => (
  <Wrap>
    <h1>Доступ в CRM</h1>
    <Link href='/students'><LinkWrap>Вернуться назад</LinkWrap></Link>
  </Wrap>
);

export default CRM