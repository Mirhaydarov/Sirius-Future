// Types
import { ChartTypes } from '../init/types';

export function getSumOfProceeds(array: ChartTypes[]): number {
  return array.reduce((acc, curr) => acc + curr.label, 0);
}