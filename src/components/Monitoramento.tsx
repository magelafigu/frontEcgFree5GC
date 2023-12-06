import dynamic from 'next/dynamic';
import { EcgDataTest } from "@/Service/geTest";
import ApexCharts from 'react-apexcharts';

// const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Monitoramento(props: any) {

  const options = {
    chart: {
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight' as const
    },
    title: {
      text: 'Product Trends by Month' as const,
      align: 'left' as const
    },
    grid: {
      row: {
        colors: ['#7AFF33', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.3
      },
    },
    xaxis: {
      // categories: props.x
    }
  }

  const series = [{
    name: "ECG",
    data: props.data
  }]

  return (
    <div className="flex justify-center items-center">
        <ApexCharts
          options={options}
          series={series}
          type="line"
          width={1280}
          height={720}
        />
    </div>
  )

}