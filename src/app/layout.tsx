import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Дижитал Наадам Юнивэрс",
  description:
    "Төв цэнгэлдэхийн үзэгч, худалдаачин, ивээн тэтгэгч, зохион байгуулагчдад зориулсан вэб суурьтай үйл ажиллагааны систем.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
