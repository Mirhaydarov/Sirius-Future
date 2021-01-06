// Components
import { ChartWidget } from '../ChartWidget';

// Component
export function PaypalChartWidget() {
  return (
    <ChartWidget 
      imgSrc='/images/paypal-logo.svg'
      imgAlt='Paypal'
      imgWidth='108'
      imgHeight='28'
      type="paypal"
      desc={50000}
      trending={50000}
    />
  );
}




 


  
