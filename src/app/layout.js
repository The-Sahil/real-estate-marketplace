import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata = {
  title: "Real Estate Marketplace",
  description: "Find Your Dream Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
