import { Container, Stack, Typography } from "@mui/material";
import { XYZLogo } from "@/components/common/XYZLogo";
import { Metadata } from "next";
import { TermsAndConditions } from "@/components/TermsAndConditions/TermsAndConditions";
import { siteData } from "@/data/sites";

export const metadata: Metadata = {
  title: "Termos e Condições | XYZ Coworking",
};

export default async function TermosECondicoes() {
  const fileId = siteData.termsAndConditionFileId;
  const apiKey = process.env.GOOGLE_API_KEY;

  const url = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/html&key=${apiKey}`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });
  const html = await res.text();

  const { JSDOM } = await import("jsdom");
  const dom = new JSDOM(html);
  const document = dom.window.document;

  document.querySelector("head")?.remove();
  const body = document.querySelector("body");

  const htmlToRender: string = body?.innerHTML || "";

  return (
    <div>
      <main>
        <Container>
          <Stack sx={{ gap: 4, mt: 4 }}>
            <XYZLogo width="5rem" />

            <Typography variant="h1">
              Termos e Condições dos Serviços
            </Typography>

            <TermsAndConditions content={htmlToRender} />

            <div></div>

            {/* <PriceTable /> */}
          </Stack>
        </Container>
      </main>
    </div>
  );
}
