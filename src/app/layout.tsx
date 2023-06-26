import MainNavigation from "@/components/MainNavigation";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className="layout">
            <MainNavigation />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
