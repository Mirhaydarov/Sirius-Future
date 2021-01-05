export function chartSumFormatter(number: number | string): string {
  let convertToString = number.toString();
  const length = convertToString.length;
  
  if (length < 4) {
    return convertToString;
  } else if (length === 4) {
    return `${convertToString[0]} тыс.`;
  } else if (length === 5) {
    return `${convertToString[0]}${convertToString[1]} тыс.`
  } else if (length === 6) {
    return `${convertToString[0]}${convertToString[1]}${convertToString[2]} тыс.`
  }

  return convertToString;
}