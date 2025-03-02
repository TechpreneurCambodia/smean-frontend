"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/services/utils/cookies";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const accessToken = getCookie('access_token');
        if (!accessToken) {
            toast.error('You need to log in.');
            router.push('/login');
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

export default ProtectedRoute;
