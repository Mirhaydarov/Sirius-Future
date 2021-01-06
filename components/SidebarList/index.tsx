// Core
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

// Components
import { SidebarItem } from '../SidebarItem'


// Styled components
const List = styled('ul')`
  list-style-type: none;
  margin-top: 1.5rem;
  overflow: hidden;
`

// Component
export function SidebarList() {
  const { pathname } = useRouter();
  
  return (
    <List>
      <SidebarItem 
        currentPage={pathname === '/lessons' ? true : false}
        icon={`/images/icons/lessons-icon.svg`}
        path='lessons'
        title='Занятия' 
      />
      <SidebarItem 
        currentPage={pathname === '/students' ? true : false}
        icon={`/images/icons/students-icon.svg`}
        path='students'
        title='Учащиеся'
      />
      <SidebarItem 
        currentPage={pathname === '/trainers' ? true : false}
        icon={`/images/icons/trainers-icon.svg`}
        path='trainers'
        title='Тренеры'
      />
      <SidebarItem 
        currentPage={pathname === '/finance' ? true : false}
        icon={`/images/icons/finance-icon.svg`}
        path='finance'
        title='Финансы'
      />
      <SidebarItem 
        currentPage={pathname === '/subscription' ? true : false}
        icon={`/images/icons/subscription-icon.svg`}
        path='subscription'
        title='Абонементы'
      />
      <SidebarItem 
        currentPage={pathname === '/CRM' ? true : false}
        icon={`/images/icons/CRM-access-icon.svg`}
        path='CRM'
        title='Доступ&nbsp;в&nbsp;CRM'
      />
      <SidebarItem 
        currentPage={pathname === '/mailings' ? true : false}
        icon={`/images/icons/mailings-icon.svg`}
        path='mailings'
        title='Рассылки'
      />
      <SidebarItem 
        currentPage={pathname === '/reports' ? true : false}
        icon={`/images/icons/reports-icon.svg`}
        path='reports'
        title='Отчеты'
      />
      <SidebarItem 
        currentPage={pathname === '/settings' ? true : false}
        icon={`/images/icons/settings-icon.svg`}
        path='settings'
        title='Настройки'
      />
    </List>
  );
}
