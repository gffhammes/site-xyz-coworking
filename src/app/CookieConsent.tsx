"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Box, Button, Typography, Paper, Container } from "@mui/material";

const localStorageId = "cookie-consent";

export const CookieConsent = () => {
  const [status, setStatus] = useState<"idle" | "accepted" | "notAccepted">(
    "idle"
  );

  useEffect(() => {
    const consent = localStorage.getItem(localStorageId);

    if (consent === "true") {
      setStatus("accepted");
    } else {
      setStatus("notAccepted");
    }
  }, []);

  const handleAccept = () => {
    setStatus("accepted");

    localStorage.setItem(localStorageId, "true");
  };

  return (
    <>
      {status === "notAccepted" && (
        <Container maxWidth={false}>
          <Paper
            elevation={3}
            sx={{
              position: "fixed",
              bottom: 16,
              p: 2,
              display: "flex",
              alignItems: "center",
              maxWidth: 700,
              zIndex: 1300,
            }}
            component="section"
            aria-live="polite"
            role="region"
          >
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Utilizamos ferramentas de terceiros que utilizam cookies, para
                melhorar sua experiência. Ao clicar em aceitar, você concorda
                com o uso de cookies em nosso site.
              </Typography>
            </Box>

            <Button variant="contained" onClick={handleAccept}>
              Aceitar
            </Button>
          </Paper>
        </Container>
      )}

      {status === "accepted" && (
        <>
          {/* GTM Script */}
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
          />
          {/* Data Layer */}
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtmId}');
            `}
          </Script>
        </>
      )}
    </>
  );
};

export const gtmId = "GTM-T588QKB9";
