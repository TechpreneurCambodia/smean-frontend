'user client';
import React from 'react';
import Layout from '@/components/Layout';
import {Plus, Filter } from 'lucide-react';

export default function page() {
    return (
        <Layout>
            <div>
                <div className="text-primary text-5xl font-semibold mt-4 sm:mt-6 md:mt-8">
                    សឺមីឯកសាររបស់អ្នក
                </div>
                <hr className="border-gray w-full my-3 " />
                <div className='flex flex-row justify-start gap-5'>
                    <div className='flex flex-row items-center border border-black bg-primary70 p-2 px-4 rounded-3xl text-primary gap-2'>
                        <Plus color="#2b5f72" />
                        បង្កើតថ្មី
                    </div>
                    <div className='flex flex-row items-center border border-black p-2 px-4 rounded-3xl text-black gap-2'>
                        <Filter />
                        តម្រៀបដោយ: ចុងក្រោយបំផុត
                    </div>
                </div>
                {/* all of the folder */}
                <div className='flex flex-row gap-4 mt-4'>
                    <div className='flex flex-col gap-4 bg-gray p-4 w-48'>
                        <img className='w-8' src="./open-folder.png" alt="folder" />
                        <div>
                            <h1 className='font-bold text-2xl text-primary'>CADT</h1>
                            <div className='flex flex-row gap-2'>
                                {/* file length */}
                                <p>២៣ ឯកសារ</p>
                                <p>·</p>
                                {/* file size */}
                                <p>៧២ MB</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 bg-gray p-4 w-48'>
                        <img className='w-8' src="./open-folder.png" alt="folder" />
                        <div>
                            <h1 className='font-bold text-2xl text-primary'>អេអុឹមខេ</h1>
                            <div className='flex flex-row gap-2'>
                                {/* file length */}
                                <p>៣២ ឯកសារ</p>
                                <p>·</p>
                                {/* file size */}
                                <p>១៦៨ MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
