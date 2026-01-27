import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookieConsent } from "./CookieConsent";
import { WhatsappFloatingButton } from "@/components/WhatsappFloatingButton/WhatsappFloatingButton";
import { siteData } from "@/data/sites";
import AbTestProvider from "@/hooks/AbTestProvider";

export const metadata: Metadata = {
  title: siteData.homeData.metaTitle,
  description: siteData.homeData.metaDescription,
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
    google: "ktE1vsv_CBY98FDQ3DCE6FjCPil11EcHnDWYtSlGD5I",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isFlorianopolis = process.env.NEXT_PUBLIC_SITE_KEY === "florianopolis";

  return (
    <html lang="pt-BR">
      <head>
        {isFlorianopolis && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MHMCWDKF');`,
            }}
          />
        )}
      </head>
      <body>
        {isFlorianopolis && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MHMCWDKF"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AbTestProvider>
              <Header />
              {children}

              <WhatsappFloatingButton />
              <Footer />
              <CookieConsent />
            </AbTestProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
