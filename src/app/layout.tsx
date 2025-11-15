import type { Metadata } from "next";

import { Inter, Fira_Code } from "next/font/google";
import SmoothScroll from "@/components/utils/SmootScroll";
import Sidebar from "@/components/layout/Sidebar";
import Particle from "@/components/ui/Particles";
import "../../assets/styles/globals.css";
import FontAwesomeConfig from "@/lib/fontawesome";
import Csr from "@/components/utils/Csr";
import Providers from "@/components/utils/ProgressBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nugroho Adi",
  description: "Next JS portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable} antialiased `}>
        <Csr>
          <Providers>
            <FontAwesomeConfig />
            <Particle />
            <SmoothScroll />

            <Sidebar />

            <div className="relative xl:ml-64 ">
              <main className="flex-grow">{children}</main>
            </div>
          </Providers>
        </Csr>
      </body>
    </html>
  );
}
