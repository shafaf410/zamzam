import { Playfair_Display, Inter, Cormorant_Garamond, Cinzel, Marcellus, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Zam Zam Mandi | Authentic Arabian Flavors in Oman",
  description: "Experience the finest Arabian Mandi and Shuwa at Zam Zam Mandi. Slow-cooked to perfection with authentic spices and tradition.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${marcellus.variable} ${inter.variable} ${notoSansArabic.variable} h-full antialiased dark`}
    >
      <body className="bg-black-pure text-white font-sans overflow-x-hidden">
        <div className="film-grain" />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
