'use client';
import ActionButton from '@/components/ActionButton';
import Welcome from './Welcome';
import Layout from '@/components/Layout';
import { useUser } from '@/contexts/userContext';

function Page() {
    const { user } = useUser();

    return (
        <Layout>
            <div className="flex w-full h-full items-center justify-center bg-base-100 text-center z-1">
                <div className="flex flex-col items-center gap-8">
                    <Welcome username={user ? user.firstName : "Guest"} />
                    <ActionButton />
                </div>
            </div>
        </Layout>
    );
}

export default Page;
