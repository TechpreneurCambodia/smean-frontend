import React from 'react';
import TranscriptCard from '@/components/TranscriptCard';
import Player from '@/components/Player';
import Layout from '@/components/Layout';

export default function Page() {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row justify-center items-start w-full h-full gap-10 mt-10">
                <div className="flex flex-col w-full max-w-2xl gap-20">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-4xl font-bold">
                            ប្រតិចារិក/Transcript
                        </h1>
                        <p>Amk_meeting.wav</p>
                    </div>
                    <div>
                        <Player />
                    </div>
                </div>
                <div className="hidden md:block bg-gray-300 w-1 h-auto"></div>
                <div className="flex flex-row w-full max-w-2xl gap-5">
                    <div className="w-1 h-screen bg-gray"></div>
                    <div>
                        <h1 className="text-4xl font-bold">ប្រតិចារិកសង្ខេប</h1>
                        <div className="flex flex-col gap-4">
                            <TranscriptCard
                                heading="00:00-05:00"
                                description="បច្ចេកវិទ្យាព័ត៌មាន (IT) គឺជាសំណុំនៃវិស័យពាក់ព័ន្ធ
                            នៅក្នុងបច្ចេកវិទ្យាព័ត៌មាន និងទំនាក់ទំនង (ICT) 
                            ដែលរួមបញ្ចូលប្រព័ន្ធកុំព្យូទ័រ កម្មវិធី ភាសាសរសេរកម្មវិធី 
                            ដំណើរការទិន្នន័យ និងព័ត៌មាន និងការផ្ទុក។[1] 
                            បច្ចេកវិទ្យាព័ត៌មាន គឺជាកម្មវិធីវិទ្យាសាស្ត្រកុំព្យូទ័រ 
                            និងវិស្វកម្មកុំព្យូទ័រ។"
                                href="#"
                            />
                            <TranscriptCard
                                heading="05:00-10:00"
                                description="បច្ចេកវិទ្យាព័ត៌មាន (IT) គឺជាសំណុំនៃវិស័យពាក់ព័ន្ធ
                            នៅក្នុងបច្ចេកវិទ្យាព័ត៌មាន និងទំនាក់ទំនង (ICT) 
                            ដែលរួមបញ្ចូលប្រព័ន្ធកុំព្យូទ័រ កម្មវិធី ភាសាសរសេរកម្មវិធី 
                            ដំណើរការទិន្នន័យ និងព័ត៌មាន និងការផ្ទុក។[1] 
                            បច្ចេកវិទ្យាព័ត៌មាន គឺជាកម្មវិធីវិទ្យាសាស្ត្រកុំព្យូទ័រ 
                            និងវិស្វកម្មកុំព្យូទ័រ។"
                                href="#"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
