import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import TopBar from "@/components/shared/Navbar/TopBar";
import { roboto_serif } from "@/utils/Font/font";
import Footer from "@/components/shared/Footer/Footer";
import Providers from "@/lib/Providers";
import { Toaster } from "react-hot-toast";
import Auth from "@/lib/Auth";

export const metadata = {
  title: "Charity",
  description: "Charity | Dotation website",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en" className={roboto_serif.className}>
        <body>
          <Auth />
          <TopBar />
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
