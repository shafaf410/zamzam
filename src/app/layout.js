import { Playfair_Display, Inter, Cormorant_Garamond, Cinzel, Marcellus } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Zam Zam Mandi | Authentic Arabian Flavors in Oman",
  description: "Experience the finest Arabian Mandi and Shuwa at Zam Zam Mandi. Slow-cooked to perfection with authentic spices and tradition.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${marcellus.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="bg-black-pure text-white font-sans overflow-x-hidden">
        <div className="film-grain" />
        {children}
      </body>
    </html>
  );
}
