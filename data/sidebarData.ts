// Types
export type OptionsTypes = {
  icon: string;
  path: string;
  title: string;
}

const options: OptionsTypes[] = [
  { icon: 'lessons', path: 'lessons', title: 'Занятия' },
  { icon: 'students', path: 'students', title: 'Учащиеся' },
  { icon: 'trainers', path: 'trainers', title: 'Тренеры' },
  { icon: 'finance', path: 'finance', title: 'Финансы' },
  { icon: 'subscription', path: 'subscription', title: 'Абонементы' },
  { icon: 'CRM-access', path: 'CRM', title: `Доступ\u00A0в\u00A0CRM` },
  { icon: 'mailings', path: 'mailings', title: 'Рассылки' },
  { icon: 'reports', path: 'reports', title: 'Отчеты' },
  { icon: 'settings', path: 'settings', title: 'Настройки' },
];

const normalizeIconPath = (name: string) => {
  return `/images/icons/${name}-icon.svg`;
};

export const sidebarData = options.map((listItem) => {
  const { icon, title, path } = listItem;

  return {
    icon: normalizeIconPath(icon),
    title,
    path,
  };
});
