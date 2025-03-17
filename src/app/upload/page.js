'use client';

import React, { useState } from 'react';
import Steps from '@/components/Steps';
import UploadBox from '@/components/UploadBox';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import { uploadAudio } from '@/services/api/audios/uploadAudio';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [submissionComplete, setSubmissionComplete] = useState(false);

    const router = useRouter();

    const handleNextClick = async () => {
        if (uploadedFiles.length === 0) {
            toast.error('Please upload at least one file before proceeding.');
            return;
        }

        setSubmissionComplete(true);

        setIsUploading(true);
        try {
            const originalFiles = uploadedFiles.map(file => file.file);
            const res = await uploadAudio({ files: originalFiles });
            console.log('Upload Response:', res);

            setIsUploading(false);
            router.push(`/notes/${res.note.id}/transcriptions`);
        } catch (err) {
            setIsUploading(false);
            setSubmissionComplete(false);
            toast.error('An error occurred while uploading the file. Please try again.');
            console.error(err);
        }
    };

    const handleFilesSelected = (files) => {
        if (files.length === 0) {
            setUploadedFiles([]);
            setSubmissionComplete(false); // Reset Step 3 when no files remain
            toast.success('បានលុបឯកសារទាំងអស់ដោយជោគជ័យ!');
            return;
        }

        setUploadedFiles(files);
        setSubmissionComplete(false); // Reset Step 3 when new files are added
    };

    return (
        <Layout>
            <div className="flex flex-col flex-grow">
                <div className="text-primary text-6xl font-semibold my-4 sm:my-6 md:my-8">
                    បញ្ចូលឯកសារ
                </div>
                <div className="flex flex-col items-center">
                    <Steps hasFiles={uploadedFiles.length > 0} submissionComplete={submissionComplete} />
                </div>
                <div className="mb-4">
                    <div className="text-2xl font-semibold text-primary">
                        * លក្ខខណ្ឌបញ្ចូលឯកសារ
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
                    <Button text="បន្ទាប់" onClick={handleNextClick} disabled={isUploading} />
                </div>
            </div>
        </Layout>
    );
}