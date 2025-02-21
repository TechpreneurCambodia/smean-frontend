import React from 'react';
import NavBar from '@/components/NavBar';
import Steps from '@/components/Steps';
import UploadBox from '@/components/UploadBox';
import Button from '@/components/Button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSideBar';

export default function Page() {
    return (
        <SidebarProvider defaultOpen={false}>
            <div className="flex flex-col w-screen h-screen overflow">
                <NavBar />
                <div className="flex flex-grow bg-gray-200">
                    <div className="flex w-full">
                        <AppSidebar />
                        <div className="flex flex-grow">
                            <SidebarTrigger />
                            <div className="flex flex-col flex-grow px-4 sm:px-6 md:px-12 lg:px-24">
                                <div className="text-4xl font-bold my-4 sm:my-6 md:my-8">
                                    បញ្ចូលប្រតិចារិក/Upload and Transcript
                                </div>
                                <div className="flex flex-col items-center">
                                    <Steps />
                                </div>
                                <div className="mb-4 ">
                                    <div className="text-2xl font-semi-bold">
                                        * បញ្ចូលប្រតិចារិក
                                    </div>
                                    <div className="text-lg font-medium">
                                        ទំហំឯកសារផ្ទុកឡើងអតិបរិមាគឺ 1GB
                                        (អូឌីយ៉ូ)
                                    </div>
                                    <div className="text-lg font-medium">
                                        ផ្ទុកឡើងពីកុំព្យូទ័រ
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-center">
                                    <UploadBox />
                                </div>
                                <div className="pb-16 flex justify-center">
                                    <Button text={"បន្ទាប់"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}
