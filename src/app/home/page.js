import ActionButton from '@/components/ActionButton';
import Drawer from '@/components/Drawer';
import React from 'react';
import Welcome from './Welcome';
import Header from '@/components/Header';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSideBar';

function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>

      <SidebarProvider>
        
        <div className="flex flex-grow">
          
          
          <AppSidebar />
          <SidebarTrigger />

          <div className="flex flex-grow items-center justify-center bg-gray-200 text-center">
            <div className="flex flex-col items-center gap-4">
              
              <Welcome username={'Someth'} />
              <ActionButton />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default Page;
