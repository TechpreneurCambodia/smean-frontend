"use client";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeInitializer({ children }) {
    useEffect(() => {
        themeChange(false); // Initialize theme-change
    }, []);

    return <>{children}</>;
}
