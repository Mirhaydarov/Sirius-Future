export const upperFirstLetter = (string : string | string[]) => {
  if (typeof string === 'string') {
    return string[0].toUpperCase() + string.substr(1);
  }
  return null;
}