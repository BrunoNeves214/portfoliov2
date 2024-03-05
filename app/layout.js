import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./utils/providers";
import Header from "./containers/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Bruno Neves Portfolio",
  description:
    "Hi there! I'm Bruno Neves a web developer navigating full speed into the WORLD WIDE WEB!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} max-w-7xl mx-auto px-4 xl:px-0 py-5 h-full`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
