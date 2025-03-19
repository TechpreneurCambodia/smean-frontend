"use client";

import ActionButton from "@/components/ActionButton";
import Layout from "@/components/Layout";
import { useUser } from "@/hooks/UserContext";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import Welcome from "./home/Welcome";

function Page() {
    const { user, fetchUserInfo } = useUser();
    useEffect(() => {
        fetchUserInfo();
    }, []);
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-6 rounded-lg shadow-lg w-96">
                <p>Landing page</p>
                <a href="/login">Login</a>
                <br></br>
                <a href="/signup">Signup</a>
            </div>
        </Layout>
    );
}

export default Page;
