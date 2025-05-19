"use client";

import Image from "next/image";
import layoutImage from "@/assets/store/List.png";
import Link from "next/link";

type StoreLayoutProps = {
  className?: string;
};

export default function StoreLayout({ className }: Readonly<StoreLayoutProps>) {
  return (
    <div className={`grid grid-cols-1 grid-rows-[auto_1fr] gap-9 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card ${className ?? ''}`}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Store Layout
        </h2>
      </div>

      <div className="grid place-items-center gap-4">
        <div className="relative w-[600px] h-[300px] rounded-2xl border-2 border-orange-500 overflow-hidden">
          <Image
            src={layoutImage}
            alt="Store Layout"
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            priority
            className="rounded-lg object-contain"
          />
        </div>

        <Link
          href="/storeLayout"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-white hover:bg-primary/90"
        >
          Details
        </Link>
      </div>
    </div>
  );
}