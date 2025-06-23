"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Container,
  useScrollTrigger,
} from "@mui/material";
import { siteKey } from "@/data/sites";

const localStorageId = "cookie-consent";
export const gtmId = "GTM-T588QKB9";

export const CookieConsent = () => {
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true });

  const [status, setStatus] = useState<"idle" | "accepted" | "notAccepted">(
    "idle"
  );
  const [shouldLoadGTM, setShouldLoadGTM] = useState(false);

  // Verifica consentimento
  useEffect(() => {
    const consent = localStorage.getItem(localStorageId);

    if (consent === "true") {
      setStatus("accepted");
    } else {
      setStatus("notAccepted");
    }
  }, []);

  // Aceita via clique ou scroll
  const handleAccept = () => {
    setStatus("accepted");
    localStorage.setItem(localStorageId, "true");
  };

  useEffect(() => {
    if (scrollTrigger) {
      handleAccept();
    }
  }, [scrollTrigger]);

  useEffect(() => {
    if (status === "accepted") {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(
          () => {
            setShouldLoadGTM(true);
          },
          { timeout: 3000 }
        );
      } else {
        setTimeout(() => {
          setShouldLoadGTM(true);
        }, 2000);
      }
    }
  }, [status]);

  const mustShowBanner = status === "notAccepted";
  const mustInstantiateGTM = siteKey === "bc" && shouldLoadGTM;

  return (
    <>
      {mustShowBanner && (
        <Container
          maxWidth={false}
          sx={{ position: "fixed", bottom: 16, zIndex: 1300 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: { xs: "flex-end", sm: "center" },
              maxWidth: 700,
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
            aria-live="polite"
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

      {mustInstantiateGTM && <GoogleTagManager gtmId={gtmId} />}
    </>
  );
};
