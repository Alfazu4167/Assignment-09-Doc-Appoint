import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-poppins', 
});

export const metadata = {
  title: "Home | Doc Appoint",
  description: "Appoint best doctor for your Disease",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar></Navbar>
        {children}</body>
       
    </html>
  );
}
