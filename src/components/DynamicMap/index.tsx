"use client";

import dynamic from "next/dynamic";

const SupermarketMap = dynamic(() => import("@/components/Locations"), {
  ssr: false,
  loading: () => <div>Loading map...</div>
});

export default function DynamicMap() {
  return (
    <div className="col-span-12">
      <SupermarketMap />
    </div>
  );
}