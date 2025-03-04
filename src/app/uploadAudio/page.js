'use client';

import React, { useState } from 'react';
import Steps from '@/components/Steps';
import UploadBox from '@/components/UploadBox';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

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
        <Layout>
            <div className="flex flex-col flex-grow">
                <div className="text-4xl font-bold my-4 sm:mt-10 md:mt-8 mt-10">
                    បញ្ចូលឯកសារ
                </div>
                <div className="flex flex-col items-center">
                    <Steps hasFiles={uploadedFiles.length > 0} />
                </div>
                <div className="mb-4">
                    <div className="text-2xl font-semibold">
                        * លក្ខខណ្ឌក្នុងការបញ្ចូលឯកសារ
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
        </Layout>
    );
}