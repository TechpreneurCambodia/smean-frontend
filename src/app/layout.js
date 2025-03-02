import { Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const kantumruyPro = Kantumruy_Pro({
  variable: "--font-body", // Match the Tailwind class name
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "SMEAN",
  description: "Your Personal Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kantumruyPro.variable} antialiased`}>
        {children}
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
