import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Home from "@/components/Home";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jasmeet Next App",
  description: "Created by Jasmeet Singh using create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Home />
        <Skills />
        <Projects />
        <Contact /> */}
        <Footer />
      </body>
    </html>
  );
}
