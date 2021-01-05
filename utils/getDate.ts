export function getDate(decrease: number) {
  const date = new Date();
  const week = new Date(date.setDate(date.getDate() - decrease));

  return week;
}