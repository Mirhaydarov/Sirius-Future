// Types
import { chartDataTypes } from '../init/types';

export function getSumOfProceeds(array: chartDataTypes): number {
  return array.reduce((acc, curr) => acc + curr.label, 0);
}