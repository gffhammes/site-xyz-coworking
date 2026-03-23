import { Container, Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import { siteData } from "@/data/sites";
import { PriceTable } from "@/components/PriceTable/PriceTable";
import { XYZLogoWithLink } from "@/components/common/XYZLogoWithLink";

export const metadata: Metadata = {
  title: `Tabela de Preços ${siteData.filialName} | XYZ Coworking`,
};

export default async function TabelaDePrecos() {
  const fileId = siteData.pricesTableFileId;
  const apiKey = process.env.GOOGLE_API_KEY;
  const env = process.env.NODE_ENV;
  const revalidateTimeInMinutes = 5;

  const url = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/csv&key=${apiKey}`;
  const res = await fetch(url, {
    next: {
      revalidate:
        env === "development" ? undefined : revalidateTimeInMinutes * 60,
    },
  });
  const html = await res.text();

  return (
    <div>
      <main>
        <Container>
          <Stack alignItems="flex-start" sx={{ gap: 4, mt: 4 }}>
            <XYZLogoWithLink width="5rem" />

            <Typography variant="h1">
              Tabela de Preços {siteData.filialName}
            </Typography>

            <PriceTable content={html} />
          </Stack>
        </Container>
      </main>
    </div>
  );
}
