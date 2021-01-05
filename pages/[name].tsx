// Core
import { useRouter } from 'next/router'

// Components
import Index  from './index'
import Custom404 from './404'

// Component
export default function NavbarList() {
  const router = useRouter();

  return (
    <>
      {router.query.name === 'students' ? <Index /> : <Custom404 />}
    </>
  );
}