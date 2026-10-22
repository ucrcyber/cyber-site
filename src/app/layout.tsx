import "./globals.css";
import { Inter, Geist_Mono, Geist } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/app/context/theme-context";
import { WindowProvider } from "@/app/context/window-context";
import Window from "@/components/window";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({ subsets: ["latin"] });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-cyber-main",
});

export const metadata = {
  title: "Cyber@UCR Website",
  description:
    "UC Riverside's Cybersecurity Club. Dedicated to advancing computer security knowledge through competition and experimentation. We go by the name, Cyber@UCR!",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, geistMono.variable)}
    >
      <body className={`${inter.className} relative flex h-screen flex-col`}>
        <ThemeProvider>
          <ReactQueryClientProvider>
            <Navbar />
            <WindowProvider>
              <Window>{children}</Window>
              <Footer />
            </WindowProvider>
          </ReactQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
