const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


import {  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Toaster } from "react-hot-toast";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-poppins', 
});

export const metadata = {
  title: "Home | Doc Appoint",
  description: "Appoint best doctor for your Disease",
};

export default async function RootLayout({ children }) {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar session={session}></Navbar>
        {children}
        <Toaster/>
        </body>
       
    </html>
  );
}
