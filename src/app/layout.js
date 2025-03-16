import { Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@/contexts/userContext";

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
        <UserProvider>
          {children}
        </UserProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
