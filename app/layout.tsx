import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mones",
  description: "Mones Porfolio made with ❤️",
};

const GradiantBackground = () => {
  return (
    <>
      <div className="absolute bg-[#dbd7fb] h-[31.25rem] w-1/2 left-4 rounded-full top-[-6rem]  md:w-2/3  lg:w-1/2 lg:left-32 z-[-1] transation-all duration-500 ease-in-out blur-[10rem]"></div>
      <div className="absolute bg-[#fbe2e3] h-[31.25rem] w-1/2 right-4 rounded-full top-[-6rem] md:w-2/3 lg:w-1/2 lg:right-32 z-[-1] transation-all duration-500 ease-in-out blur-[10rem]"></div>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-950 h-screen flex relative justify-center">
        <GradiantBackground />
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
