export function trendingPercent(from: number, to: number) {
  const result = 100 - ((from / to) * 100);
  return Math.floor(result);
}