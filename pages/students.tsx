// Core
import { InferGetStaticPropsType } from 'next'

// Components
import { MainLayout } from '../components/MainLayout'

// Types
import { ChartDataTypes } from '../init/types'

// Component
export default function Students({
  chartData
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MainLayout chartData={chartData} />;
}

export async function getStaticProps() {
  type ResTypes = {
    chartData : ChartDataTypes;
  }

  const res = await fetch(`http://localhost:3000/api/chart`);
  const { chartData }: ResTypes = await res.json();

  return {
    props: {
      chartData
    }
  };
}