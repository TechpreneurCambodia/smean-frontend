"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/hooks/UserContext";
import toast from "react-hot-toast";
import { setCookie } from "@/services/utils/cookies";
import Loading from "@/components/Loading";
import PublicRoute from "@/components/PublicRoute";

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { setUserState } = useUser();

    useEffect(() => {
        const handleAuth = async () => {
            const token = searchParams.get("token");
            const refreshToken = searchParams.get("refreshToken");
            const user = searchParams.get("user");

            if (token) {
                const maxAge = 60 * 60 * 24;
                setCookie("access_token", token, maxAge);
                setCookie("refresh_token", refreshToken, maxAge * 2);

                setUserState(user);
                toast.success("Login successful!");

                router.push("/home");
            }
        };

        handleAuth();
    }, [searchParams, router, setUserState]);


    return (
        <PublicRoute>
            <Loading />
        </PublicRoute>
        );
}
