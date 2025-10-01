import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Andrej - Frontend Developer",
  description: "Personal portfolio of Andrej, frontend developer that likes to craft solid and scalable frontend products with great user experiences.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} antialiased bg-black text-white dark:bg-black dark:text-white light:bg-white light:text-black transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
