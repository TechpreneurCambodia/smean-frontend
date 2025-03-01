"use client"
import React from "react";
import { useRouter } from "next/navigation";

 // Import useRouter from next/navigation

function SummaryTranscript() {
  const router = useRouter(); // Initialize router

  return (
    <div>
      <section className="border-t p-4 flex justify-center">
        <div className="w-full max-w-md">
          <h2 className="font-bold text-[36px]">សង្ខេបប្រតិចារិក</h2>
          <div className="mt-4 space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="p-4 bg-gray-100 border-l-4 border-gray-500 rounded-md">
                <p className="text-[16px] text-gray-500">00:00-05:00</p>
                <p className="pl-2 text-[20px]">
                  បច្ចេកវិទ្យាព័ត៌មាន (IT) គឺជាសំណុំនៃវិស័យពាក់ព័ន្ធ
                  នៅក្នុងបច្ចេកវិទ្យាព័ត៌មាន និងទំនាក់ទំនង (ICT)
                  ដែលរួមបញ្ចូលប្រព័ន្ធកុំព្យូទ័រ កម្មវិធី ភាសាសរសេរកម្មវិធី
                  ដំណើរការទិន្នន័យ និងព័ត៌មាន និងការផ្ទុក។[1]
                  បច្ចេកវិទ្យាព័ត៌មាន គឺជាកម្មវិធីវិទ្យាសាស្ត្រកុំព្យូទ័រ
                  និងវិស្វកម្មកុំព្យូទ័រ។
                </p>
              </div>
            ))}
          </div>

          {/* "See More" Button */}
          <div className="mt-4 text-right">
            <button
              onClick={() => router.push('/allsummary')}
              className="text-blue-500 hover:underline text-lg"
            >
              មើលបន្ថែម →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SummaryTranscript;
