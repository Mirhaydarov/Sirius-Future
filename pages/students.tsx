// Core
import { InferGetStaticPropsType } from 'next'

// Components
import { MainLayout } from '../components/MainLayout'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

// Types
import { ChartDataTypes } from '../init/types'

// Component
export default function Students({
  chartData
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <Navbar />
      <Header />
      <Main chartData={chartData}/>
      <Footer />
    </MainLayout>
  );
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