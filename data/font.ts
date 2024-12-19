import { Libre_Baskerville, Urbanist } from "next/font/google";

export const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
