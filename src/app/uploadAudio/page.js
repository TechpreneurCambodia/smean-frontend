import React from 'react'
import NavBar from '@/components/NavBar'
import Steps from '@/components/Steps'
import UploadBox from '@/components/UploadBox';
import Button from '@/components/Button';

function Page() {
    return (
        <div className="bg-white min-h-screen">
            <NavBar />
            <div className="text-lg ml-12">បញ្ចូលប្រតិចារិក/Upload and Transcript</div>
            <div className="flex flex-col items-center">
                <Steps />
            </div>
            <div>
                <div className="text-base ml-12">* បញ្ចូលប្រតិចារិក</div>
                <div className="text-xs ml-12">ទំហំឯកសារផ្ទុកឡើងអតិបរមាគឺ 1GB (អូឌីយ៉ូ)</div>
                <div className="text-xs ml-12">ផ្ទុកឡើងពីកុំព្យូទ័រ</div>
            </div>
            <UploadBox />
            <div className="w-1/4 mx-auto mb">
                <Button text={"បន្ទាប់"}/>
            </div>
        </div>
    );
}

export default Page;