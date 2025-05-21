import "@livekit/components-styles";
import { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans400 = Public_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iNara Voice Assistant",
  description: "An intelligent voice assistant by iNara"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${publicSans400.className}`}>
      <body className="h-full bg-gradient-to-b from-white to-gray-50">
        <header className="py-4 px-6 bg-inara-green text-white shadow-md">
          <h1 className="text-2xl font-bold">iNara</h1>
        </header>
        <main className="h-[calc(100%-4rem)]">{children}</main>
      </body>
    </html>
  );
}
