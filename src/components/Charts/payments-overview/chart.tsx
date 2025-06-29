"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

type PropsType = {
  data: {
    received: { x: unknown; y: number }[];
    due: { x: unknown; y: number }[];
  };
};

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function PaymentsOverviewChart({ data }: PropsType) {
  const isMobile = useIsMobile();

  const options: ApexOptions = {
    legend: {
      show: false,
    },
    colors: ["#FA784B", "#FE50D1"],
    chart: {
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
      fontFamily: "Poppins, sans-serif",
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
      width: isMobile ? 2 : 3,
    },
    grid: {
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      marker: { show: true },
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
  };

  return (
    <div className="-ml-4 -mr-5 h-[310px]">
      <Chart
        options={options}
        series={[
          {
            name: "Higher Price",
            data: data.received,
          },
          {
            name: "Lower Price",
            data: data.due,
          },
        ]}
        type="area"
        height={310}
      />
    </div>
  );
}
