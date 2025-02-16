import ActionButton from "@/components/ActionButton";
import Drawer from "@/components/Drawer";
import React from "react";
import Welcome from "./Welcome";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";

function Page() {
  return (
    <SidebarProvider>
      <div className="flex flex-col w-screen h-screen">
        <Header className="w-full" />
        <div className="flex flex-grow bg-gray-200">
          <div className="flex w-full ">
            <div className="flex w-full ">
              <AppSidebar />
              <div className="flex flex-grow">
                <SidebarTrigger />
                <div className="flex flex-grow items-center justify-center bg-gray-200 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <Welcome username={"Someth"} />
                    <ActionButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Page;
