"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/services/utils/cookies";
import toast from "react-hot-toast";

const PublicRoute = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const accessToken = getCookie('access_token');
        if (accessToken) {
            toast.success('You are already logged in.');
            router.push('/home'); 
        } else {
            setLoading(false);
        }
    }, [router]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        ); 
    }

    return <>{children}</>;
};

export default PublicRoute;
