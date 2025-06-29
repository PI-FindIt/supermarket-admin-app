import "@/app/global.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";

import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV == "development") {
 loadDevMessages();
 loadErrorMessages();
}

export const metadata: Metadata = {
 title: {
   template: "%s | FindIt - SM Dashboard",
   default: "FindIt - SM Dashboard",
 },
 description: "FindIt - Supermarket Administrator Dashboard Management",
};

export default function DashboardLayout({ children }: Readonly<PropsWithChildren>) {
 return (
   <>
     <NextTopLoader color="#fa784b" showSpinner={false} />
     <div className="flex min-h-screen">
       <Sidebar />
       <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
         <Header />
         <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
           {children}
         </main>
       </div>
     </div>
   </>
 );
}