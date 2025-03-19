import { Kantumruy_Pro } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@/hooks/UserContext";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { ThemeProvider } from "next-themes";

const kantumruyPro = Kantumruy_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "ស្មៀន / Smean",
  description: "Personal Assistant for your daily meetings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kantumruyPro.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <ThemeInitializer>
            <UserProvider>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </UserProvider>
          </ThemeInitializer>
        </ThemeProvider>


        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
