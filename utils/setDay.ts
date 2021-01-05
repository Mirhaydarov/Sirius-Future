// Utils
import { getDate } from './index'

export const setDay = (type: string, day: number) => getDate(day).toLocaleDateString('ru', { weekday: type });