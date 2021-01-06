// Utils
import { getSumOfProceeds } from '../../utils'

// Types
import { ChartTypes } from '../../init/types'

export function proceedsFormatter(data: ChartTypes []) {
  const formatter = new Intl.NumberFormat('ru');
  const proceedsSum = formatter.format(getSumOfProceeds(data));
  const trendingSum = getSumOfProceeds(data);

  return {
    proceedsSum,
    trendingSum
  };
}