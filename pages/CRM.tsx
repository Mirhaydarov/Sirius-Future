// Core
import Link from 'next/link'

// Components
import { Wrap, LinkWrap } from './index'
import { Navbar } from '../components/Navbar'

// Component
const CRM = () => (
  <>
    <Navbar />
    <Wrap>
      <h1>Доступ в CRM</h1>
      <Link href='/students'><LinkWrap>Вернуться назад</LinkWrap></Link>
    </Wrap>
  </>
);

export default CRM