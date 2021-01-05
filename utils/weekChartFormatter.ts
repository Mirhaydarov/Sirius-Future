export function weekChartFormatter(value: number, type: string) {
  const shortWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const longWeek = ['понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу', 'воскресенье'];

  if (type === 'short') return shortWeek[value];
  return longWeek[value]
}