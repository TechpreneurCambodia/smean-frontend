"use client"
import React from "react";
import { useRouter } from "next/navigation";

 // Import useRouter from next/navigation

function SummaryNoDetail() {
  const router = useRouter(); // Initialize router

  return (
    <div>
      <section className="border-t p-4 flex justify-end">
        <div className="w-full max-w-md">
          <h2 className="font-bold text-[36px]">សង្ខេបសំឡេងជាអក្សរ</h2>
          <div className="mt-4 space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="p-4 bg-gray-100 border-l-4 border-gray-500 rounded-md">
                {/* <p className="text-[16px] text-gray-500">00:00-05:00</p> */}
                <p className="pl-2 text-[20px]">
                  
                </p>
              </div>
            ))}
          </div>

          
          <div className="mt-4 text-right">
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default SummaryNoDetail;
