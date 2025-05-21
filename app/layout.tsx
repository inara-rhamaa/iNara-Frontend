import "@livekit/components-styles";
import { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Clock from "@/components/Clock";

const publicSans400 = Public_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iNara Kiosk",
  description: "iNara AI Assistant Kiosk Application"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${publicSans400.className}`}>
      <body className="h-full bg-inara-pastel-white">
        <header className="py-3 px-6 bg-inara-green text-white shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">iNara Kiosk</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm bg-inara-yellow text-inara-green-dark px-3 py-1 rounded-full font-medium">AI Assistant</span>
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </div>
          <Clock />
        </header>
        <main className="h-[calc(100vh-3rem)] overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
