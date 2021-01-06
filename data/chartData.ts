// Utils
import { getCurrentMonthLength, mockChartData } from '../utils'

// Types
import { ChartDataTypes } from '../init/types'

const yandex = {
  day: [...mockChartData(7)],
  week: [...mockChartData(7, 'week')],
  month: [...mockChartData(getCurrentMonthLength())]
}

const paypal = {
  day: [...mockChartData(7)],
  week: [...mockChartData(7, 'week')],
  month: [...mockChartData(getCurrentMonthLength())]
}

const chartData: ChartDataTypes = {
  yandex,
  paypal
}

export { chartData }