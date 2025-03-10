import React from 'react';
import SummaryNoDetail from '../../components/SummaryNoDetail';
import TimeAndRecorder from '../../components/TimeAndRecorder';
import Logo from '../../components/Logo';
import MinuteOption from '../../components/MinuteOption';
import DateTime from '../../components/DateTime';
import Layout from '../../components/Layout';

function page() {
    return (
        <Layout>
            <div className="m-4">
                <Logo />
                <DateTime />
                <div className="flex justify-start">
                    <h2 className="font-bold text-[32px] flex items-center gap-2 ">
                        កំណត់ពេលវេលាថត៖
                    </h2>
                    <div className="ml-4">
                        <MinuteOption />
                    </div>
                </div>
                <SummaryNoDetail />
                <TimeAndRecorder />
            </div>
        </Layout>
    );
}

export default page;
