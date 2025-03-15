"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { Mic, Upload } from "lucide-react";

function ActionButton() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-8">
      {/* <div className="flex justify-center gap-4">
        <button className="flex items-center  justify-center w-[200px] py-3 bg-white text-primary rounded-lg shadow ">
          <Mic className="mr-2 " /> ថតសំឡេង
        </button>
        <button className="flex items-center w-[200px] justify-center py-3 bg-white text-primary rounded-lg shadow" onClick={() => router.push('/upload')}>
          <Upload className="mr-2" /> បញ្ចូល file សំឡេង
        </button>
      </div> */}
      <span className="text-[#64748B] text-center font-[Kantumruy Pro] text-[16px] font-[400] leading-[normal]">ស្មៀនជួយក្នុងការបកប្រែអាត់សម្លេងទៅជាល្បះអក្សរ។<br/>អ្នកប្រើប្រាស់អាច upload audio file ឬ​ ធ្វើការថតសម្លេងដោយផ្តាល់។</span>
      <div className="flex justify-center gap-6">
        <button className="flex items-center  text-[17px] border justify-center w-[180px] rounded-[100px] h-[52px] py-3 bg-white text-primary shadow ">
          <Mic className="mr-2  " />ថតសម្លេង
        </button>
        <button className="flex items-center w-[180px] border rounded-[100px] h-[52px] text-[17px]  justify-center py-3 bg-white text-primary  shadow" onClick={() => router.push('/upload')}>
          <Upload className="mr-2 leading-[20px]" />File សំឡេង
        </button>
      </div>
    </div>
  )
}

export default ActionButton