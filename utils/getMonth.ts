export function getMonth(language: string, formatter: string, decrease: number | string) {
  const date = new Date();
  const newDate = new Date(date.setDate(date.getDate() - (+decrease - 1)));

  return newDate.toLocaleDateString(language, { month: formatter });
}