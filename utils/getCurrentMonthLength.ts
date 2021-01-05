export function getCurrentMonthLength() {
  const data = new Date();
  return new Date(data.getFullYear(), data.getMonth(), 0).getDate();
}