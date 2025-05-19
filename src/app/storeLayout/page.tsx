"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import layoutImage from "@/assets/store/List.png";
import { Header } from "@/components/Layouts/header";
import { Sidebar } from "@/components/Layouts/sidebar";
import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";

export default function StoreLayoutPage() {
  const [description, setDescription] = useState("Enter store layout description here...");

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSave = () => {
    console.log("Saving description:", description);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-dark-1">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main className="mx-auto w-full max-w-screen-xl p-4 md:p-6 2xl:p-10">
            <Breadcrumb pageName="Store Layout Editor" />

            <div className="grid gap-8">
                <div className="flex justify-center relative h-[300px] w-[600px] rounded-2xl border-2 border-orange-500 overflow-hidden">
                  <Image
                    src={layoutImage}
                    alt="Store Layout"
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority
                    className="rounded-lg object-contain"
                  />
                </div>

              <ShowcaseSection title="Layout Description" className="!p-7">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <TextAreaGroup
                    label="Store Layout Description"
                    defaultValue={description}
                    onChange={handleDescriptionChange}
                    placeholder="Enter detailed store layout description..."
                    rows={6}
                  />

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      className="rounded-lg border border-stroke px-6 py-2.5 font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
                      onClick={() => setDescription("Enter store layout description here...")}
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={handleSave}
                      className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white hover:bg-opacity-90"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </ShowcaseSection>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}