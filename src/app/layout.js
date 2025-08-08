import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Nalanda Radiance Clock Lamp - Inspired by Nalanda Gedige",
  description: "Discover our exquisite Nalanda Radiance clock lamp inspired by the ancient architecture of Nalanda Gedige. Heritage design meets modern living.",
  keywords: "nalanda radiance clock lamp, nalanda gedige, heritage design, home decor, lighting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
