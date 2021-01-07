// Core
import styled from '@emotion/styled'

// Components
import { Widget } from '../Base'
import { WidgetBody } from '../Base';
import { widgetData } from '../../data/widgetData';

// Styled components
const FooterWrap = styled('footer')`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.1rem;
  padding: 0.6rem;

  @media (min-width: 500px) {
    grid-template-areas: 'more more';
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 780px) {
    grid-template-areas: 'more more more';
    grid-template-columns: repeat(3, 1fr);
    margin-left: 1.1rem;
  }

  @media (min-width: 1000px) {
    grid-template-areas: 'more' 'more';
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    align-items: space-between;
  }
`

export function Footer() {
  return (
    <FooterWrap>
      {widgetData.map(item => (
        <Widget key={item.title} {...item}>
          <WidgetBody {...item} />
        </Widget>
      ))}
      <Widget imgSrc='/images/icons/widget/file-edit-widget-icon.svg' imgAlt='Редактировать файл' isActive >
        <WidgetBody title="Получить выписку по зарплате тренеров" isActive />
      </Widget>
    </FooterWrap>
  );
}