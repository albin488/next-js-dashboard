import { Inter } from "next/font/google";
import "./globals.css";
import { AutProvider } from "./Providers";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NGCA",
  description: "NGCA system client",
};

export default async function RootLayout({ children }) {
  // Check if the current page is the login page
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AutProvider>
          {session && <Navbar />}
          {children}
        </AutProvider>
      </body>
    </html>
  );
}
