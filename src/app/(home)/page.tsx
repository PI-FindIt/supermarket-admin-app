import { PaymentsOverview } from "@/components/Charts/payments-overview";
import { UsedDevices } from "@/components/Charts/used-devices";
import StoreLayout from "@/components/ImageLayout/index";
import { WeeksProfit } from "@/components/Charts/weeks-profit";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { Suspense } from "react";
import TopProducts from "@/components/Tables/top-products";
import { TopProductsSkeleton } from "@/components/Tables/top-products/skeleton";
import DynamicMap from "@/components/DynamicMap";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: Readonly<PropsType>) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
      <PaymentsOverview
        className="col-span-12 xl:col-span-7"
        key={extractTimeFrame("payments_overview")}
        timeFrame={extractTimeFrame("payments_overview")?.split(":")[1]}
      />

      <WeeksProfit
        key={extractTimeFrame("weeks_profit")}
        timeFrame={extractTimeFrame("weeks_profit")?.split(":")[1]}
        className="col-span-12 xl:col-span-5"
      />

      <div className="col-span-12 grid">
        <Suspense fallback={<TopProductsSkeleton />}>
          <TopProducts />
        </Suspense>
      </div>

      <UsedDevices
        className="col-span-12 xl:col-span-5"
        key={extractTimeFrame("used_devices")}
        timeFrame={extractTimeFrame("used_devices")?.split(":")[1]}
      />

      <StoreLayout
        className="col-span-12 xl:col-span-7"
      />

      <DynamicMap />
    </div>
  );
}