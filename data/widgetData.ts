// Types
type widgetDataTypes = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  descMore?: string;
  moreInfo?: widgetMoreInfoTypes [];
}

export type widgetMoreInfoTypes = {
  title: string;
  label: string | number;
}

const widgetMoreStudents: widgetMoreInfoTypes[] = [
  { title: 'За последнюю неделю', label: 25 },
  { title: 'Без абонемента', label: 150 },
  { title: 'Неактивные', label: 25 },
  { title: 'Добавлено за день', label: 50 },
];

export const widgetData: widgetDataTypes[] = [
  {
    imgSrc: '/images/icons/widget/students-widget-icon.svg',
    imgAlt: 'Студенты',
    title: 'Количество учеников:',
    desc: '250',
    moreInfo: widgetMoreStudents
  },
  {
    imgSrc: '/images/icons/widget/currency-widget-icon--rub.svg',
    imgAlt: 'Рубль',
    title: 'Должников:',
    desc: '12',
    descMore: '(1\u00A0850,5\u00A0руб)',
  },
  {
    imgSrc: '/images/icons/widget/subscription-widget-Icon.svg',
    imgAlt: 'Абонемент',
    title: 'Без абонемента:',
    desc: '30'
  },
  {
    imgSrc: '/images/icons/widget/book-widget-icon.svg',
    imgAlt: 'Книга',
    title: 'Количество тренеров:',
    desc: '250'
  },
  {
    imgSrc: '/images/icons/widget/wallet-today-widget-icon.svg',
    imgAlt: 'Кошелек к оплате сегодня',
    title: 'К оплате сегодня:',
    desc: '121'
  },
  {
    imgSrc: '/images/icons/widget/wallet-tomorrow-widget-icon.svg',
    imgAlt: 'Кошелек к оплате на завтра',
    title: 'К оплате завтра:',
    desc: '32'
  },
];
