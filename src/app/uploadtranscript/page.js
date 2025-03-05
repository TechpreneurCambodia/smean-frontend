'use client';
import { useState } from 'react';
import { Play, Rewind, FastForward } from 'lucide-react';

import { Card, CardContent } from '../../components/Card';
export default function TranscriptPage() {
  const [time, setTime] = useState('00:14.10');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="text-[32px] font-bold flex items-center">
          📖 ប្រតិចារិក/Transcript
        </h2>
        <p className="mt-2 font-semibold">Amk_meeting.wav</p>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-[64px] font-medium">
          <span className="text-dark_gray">00:</span>
          <span className="text-primary">14.10</span>
        </h1>


        {/* Play Button */}
        <div className="flex items-center gap-4 mt-6">
          <button className="btn btn-circle btn-outline">
            <Rewind size={24} />
          </button>

          <button className="btn btn-circle text-white p-4 bg-primary" >
            <Play size={32} />
          </button>


          <button className="btn btn-circle btn-outline">
            <FastForward size={24} />
          </button>
        </div>
        <p className="mt-2 text-gray-500">Play the Records</p>
      </main>

      {/* Transcript Section */}
      <aside className="w-1/3 p-4 border-l overflow-y-auto">
        <h2 className=" font-bold text-[32px]">ប្រតិចារិកសង្ខេប</h2>
        <Card className="mt-4 bg-gray-50">
          <CardContent className="p-4">
            <p className="text-gray-700 text-sm">00:00-05:00</p>
            <p className="text-gray-900 mt-2">បច្ចេកវិទ្យាព័ត៌មាន (IT) គឺជាសំណុំនៃវិស័យពាក់ព័ន្ធ
              នៅក្នុងបច្ចេកវិទ្យាព័ត៌មាន និងទំនាក់ទំនង (ICT)
              ដែលរួមបញ្ចូលប្រព័ន្ធកុំព្យូទ័រ កម្មវិធី ភាសាសរសេរកម្មវិធី
              ដំណើរការទិន្នន័យ និងព័ត៌មាន និងការផ្ទុក។[1]
              បច្ចេកវិទ្យាព័ត៌មាន គឺជាកម្មវិធីវិទ្យាសាស្ត្រកុំព្យូទ័រ
              និងវិស្វកម្មកុំព្យូទ័រ។</p>
          </CardContent>
        </Card>
        <Card className="mt-4 bg-gray-50">
          <CardContent className="p-4">
            <p className="text-gray-700 text-sm">05:00-10:00</p>
            <p className="text-gray-900 mt-2">បច្ចេកវិទ្យាព័ត៌មាន (IT) គឺជាសំណុំនៃវិស័យពាក់ព័ន្ធ
              នៅក្នុងបច្ចេកវិទ្យាព័ត៌មាន និងទំនាក់ទំនង (ICT)
              ដែលរួមបញ្ចូលប្រព័ន្ធកុំព្យូទ័រ កម្មវិធី ភាសាសរសេរកម្មវិធី
              ដំណើរការទិន្នន័យ និងព័ត៌មាន និងការផ្ទុក។[1]
              បច្ចេកវិទ្យាព័ត៌មាន គឺជាកម្មវិធីវិទ្យាសាស្ត្រកុំព្យូទ័រ
              និងវិស្វកម្មកុំព្យូទ័រ។</p>
          </CardContent>
        </Card>
        <div className="mt-4 text-right">
          <button
            onClick={() => router.push("/allsummary")}
            className="text-blue-500 hover:underline text-lg"
          >
            មើលបន្ថែម →
          </button>
        </div>
      </aside>
    </div>
  );
}
