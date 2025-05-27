"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import {
  Box,
  Button,
  Typography,
  Paper,
  Container,
  useScrollTrigger,
} from "@mui/material";

const localStorageId = "cookie-consent";

export const CookieConsent = () => {
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true });

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

  useEffect(() => {
    if (scrollTrigger) {
      handleAccept();
    }
  }, [scrollTrigger]);

  return (
    <>
      {status === "notAccepted" && (
        <Container
          maxWidth={false}
          sx={{ position: "fixed", bottom: 16, zIndex: 1300 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              maxWidth: 700,
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
            aria-live="polite"
            role="region"
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Nós utilizamos cookies para garantir que você tenha a melhor
                experiência em nosso site. Ao continuar navegando, assumimos que
                você concorda com a utilização desses cookies.
              </Typography>
            </Box>

            <Button variant="contained" onClick={handleAccept}>
              OK
            </Button>
          </Paper>
        </Container>
      )}

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
  );
};

export const gtmId = "GTM-T588QKB9";
