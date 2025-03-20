"use client";

import ActionButton from "@/components/ActionButton";
import Welcome from "./Welcome";
import Layout from "@/components/Layout";
import { useUser } from "@/hooks/UserContext";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import { SkeletonLoading } from "./Skeleton";

function Page() {
    const { user, fetchUserInfo } = useUser();
    useEffect(() => {
        fetchUserInfo();
    }, []);
    return (
        <Layout>
            <div className="flex w-full h-full items-center justify-center bg-base-100 text-center z-1">
                <div className="flex flex-col items-center gap-8">
                    {user ? (
                        <>
                            <Welcome username={user ? user.firstName : "Guest"} />
                            <ActionButton />
                        </>
                    ) : (
                        <>
                            <SkeletonLoading />
                            <Skeleton variant="text" width={400} height={70} />
                            <Skeleton variant="text" width={300} height={40} />
                            <div className="w-1/3 flex justify-center space-x-4">
                                <Skeleton variant="button" width={300} height={50} />
                                <Skeleton variant="button" width={300} height={50} />
                            </div>
                        </>
                    )}

                </div>
            </div>
        </Layout>
    );
}

export default Page;
