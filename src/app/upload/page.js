'use client';

import { useState } from 'react';
import Steps from '@/components/Steps';
import UploadBox from '@/components/UploadBox';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import { uploadAudio } from '@/services/api/audios/uploadAudio';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import MinuteOption from '@/components/MinuteOption';

export default function Page() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [submissionComplete, setSubmissionComplete] = useState(false);
    const [selectedMinutes, setSelectedMinutes] = useState(3);
    const router = useRouter();

    const handleMinuteSelect = (minutes) => {
        setSelectedMinutes(minutes);
        console.log('Selected Minutes:', minutes);
    };

    const handleNextClick = async () => {
        if (uploadedFiles.length === 0) {
            toast.error('Please upload at least one file before proceeding.');
            return;
        }

        // Mark that submission has started.
        setSubmissionComplete(true);
        setIsUploading(true);

        try {
            const originalFiles = uploadedFiles.map(file => file.file);
            const res = await uploadAudio({ files: originalFiles, chunkDuration: selectedMinutes * 60 });
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
            setSubmissionComplete(false);
            toast.success('បានលុបឯកសារទាំងអស់ដោយជោគជ័យ!');
            return;
        }
        setUploadedFiles(files);
        setSubmissionComplete(false);
    };

    return (
        <Layout>
            <div className="flex flex-col flex-grow gap-4">
                <div className="flex sm:flex-row flex-col gap-4 justify-between w-full max-w-4xl mx-auto">
                    <div className="text-primary text-6xl font-semibold my-4 sm:my-6 md:my-8">
                        បញ្ចូលឯកសារ
                    </div>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <Steps hasFiles={uploadedFiles.length > 0} submissionComplete={submissionComplete} />
                </div>
                <div className="flex items-center">
                    <div className="flex sm:flex-row flex-col gap-4 justify-between w-full max-w-4xl mx-auto">
                        <div className='grid grid-cols-1 gap-4 text-center'>
                            <p className="text-left text-2xl font-semibold text-primary">
                                * លក្ខខណ្ឌបញ្ចូលឯកសារ
                            </p>
                            <p className="text-left text-lg font-medium">
                                ទំហំឯកសារផ្ទុកឡើងអតិបរិមាគឺ 1GB (អូឌីយ៉ូ)
                            </p>
                            <p className="text-left text-lg font-medium">
                                ផ្ទុកឡើងពីកុំព្យូទ័រ
                            </p>
                        </div>
                        <MinuteOption onSelect={handleMinuteSelect} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <UploadBox onFilesSelected={handleFilesSelected} />
                </div>
                {/* Conditionally render the button only if not uploading */}
                {!isUploading && (
                    <div className="flex sm:flex-row flex-col gap-4 justify-between w-full max-w-4xl mx-auto">
                        <Button text="បន្ទាប់" onClick={handleNextClick} disabled={isUploading} />
                    </div>
                )}
            </div>
        </Layout>
    );
}
