import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookieConsent } from "./CookieConsent";

export const metadata: Metadata = {
  title:
    "Coworking em Balneário Camboriú | XYZ Coworking - Endereço Fiscal, Salas e Estações",
  description:
    "Encontre o melhor coworking em Balneário Camboriú! Salas privativas, endereço fiscal, estações de trabalho e estrutura premium para sua empresa crescer. Conheça o XYZ Coworking!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/light-theme-favicon.ico",
        href: "/images/light-theme-favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/dark-theme-favicon.ico",
        href: "/images/dark-theme-favicon.ico",
      },
    ],
  },
  verification: {
    google: "BUPbm-P0z-x4MGsnxgx1zKXwFSOTUTmZAXXtR2Yx-e8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
            <CookieConsent />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
