"use client";
import { useRouter } from "next/navigation";
import { Mic, Upload } from "lucide-react";

function ActionButton() {
  const router = useRouter();
  
  const baseButton =
    "btn bg-white flex items-center justify-center rounded-full border p-6 text-primary text-base font-normal shadow transition hover:bg-opacity-10";

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-[#64748B] text-xl text-center">
        ស្មៀនជួយក្នុងការបកប្រែអាត់សម្លេងទៅជាល្បះអក្សរ។<br />
        អ្នកប្រើប្រាស់អាច upload audio file ឬ​ ធ្វើការថតសម្លេងដោយផ្តាល់។
      </p>
      <div className="grid grid-cols-2 gap-4">
        <button
          className={baseButton}
          onClick={() => router.push("/recording")}
          aria-label="Record Audio"
        >
          <Mic className="mr-2" />  <span className="text-xl">ថតសម្លេង</span>
        </button>
        <button
          className={baseButton}
          onClick={() => router.push("/upload")}
          aria-label="Upload Audio File"
        >
          <Upload className="mr-2" /> <span className="text-xl">File សម្លេង</span> 
        </button>
      </div>
    </div>
  );
}

export default ActionButton;
