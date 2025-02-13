import ActionButton from '@/components/ActionButton';
import Drawer from '@/components/Drawer';
import React from 'react';
import Welcome from './Welcome';
import Header from '@/components/Header';
function Page() {
  return (
   
    <>
     <Header/>
    <div className="flex items-center justify-center h-screen bg-gray-200 text-center">
      
      <div className="flex flex-col items-center gap-4">

          <Welcome username={'Someth'} />
        <ActionButton />
      </div>

    </div>
    </>
  )
}

export default Page;
