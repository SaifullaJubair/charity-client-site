import {
  Anton,
  Archivo_Black,
  Caveat,
  Cookie,
  Noto_Sans_Display,
  Roboto_Mono,
  Roboto_Serif,
  Russo_One,
  Satisfy,
  Yatra_One,
} from "next/font/google";

export const yatra = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
export const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
export const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
export const noto_sans = Noto_Sans_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const russo_one = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
