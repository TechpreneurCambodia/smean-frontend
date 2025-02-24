'use client';

import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Steps from '@/components/Steps';
import UploadBox from '@/components/UploadBox';
import Button from '@/components/Button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSideBar';

export default function Page() {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFilesSelected = (files) => {
        setUploadedFiles(files);
        console.log('Files selected:', files);
    };

    const handleNextClick = () => {
        if (uploadedFiles.length === 0) {
            alert('Please upload at least one file before proceeding.');
            return;
        }
        
        console.log('Proceeding with files:', uploadedFiles);
        // Add your logic here for what happens next
    };

    return (
        <SidebarProvider defaultOpen={false}>
            <div className="flex flex-col w-screen h-screen overflow">
                <NavBar />
                <div className="flex flex-grow bg-white">
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
                                <div className="mb-4">
                                    <div className="text-2xl font-semibold">
                                        * បញ្ចូលប្រតិចារិក
                                    </div>
                                    <div className="text-lg font-medium">
                                        ទំហំឯកសារផ្ទុកឡើងអតិបរិមាគឺ 1GB (អូឌីយ៉ូ)
                                    </div>
                                    <div className="text-lg font-medium">
                                        ផ្ទុកឡើងពីកុំព្យូទ័រ
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-center">
                                    <UploadBox onFilesSelected={handleFilesSelected} />
                                </div>
                                <div className="pb-16 flex justify-center">
                                    <Button text="បន្ទាប់" onClick={handleNextClick} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}