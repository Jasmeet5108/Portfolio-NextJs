import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Head from "next/head";

const poppins = Poppins({
  subsets: ['latin']
});

export const metadata = {
  title: "Jasmeet | Dev Portfolio",
  description: "Created by Jasmeet Singh using create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      {/* <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head> */}
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
