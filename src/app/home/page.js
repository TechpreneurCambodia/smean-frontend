import React from 'react';
import ActionButton from '@/components/ActionButton';
import Welcome from './Welcome';
import Layout from '@/components/Layout';

function Page() {
    return (
        <Layout>
            <div className="flex flex-grow items-center justify-center bg-gray-200 text-center">
                <div className="flex flex-col items-center gap-4">
                    <Welcome username="Someth" />
                    <ActionButton />
                </div>
            </div>
        </Layout>
    );
}

export default Page;
