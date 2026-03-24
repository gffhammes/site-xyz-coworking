import { Container, Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import { TermsAndConditions } from "@/components/TermsAndConditions/TermsAndConditions";
import { siteData } from "@/data/sites";
import { XYZLogoWithLink } from "@/components/common/XYZLogoWithLink";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Termos e Condições | XYZ Coworking",
};

export default async function TermosECondicoes() {
  if (!siteData.termsAndConditionFileId) {
    redirect("/");
  }

  const fileId = siteData.termsAndConditionFileId;
  const apiKey = process.env.GOOGLE_API_KEY;
  const env = process.env.NODE_ENV;
  const revalidateTimeInMinutes = 60;

  const url = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/html&key=${apiKey}`;
  const res = await fetch(url, {
    next: {
      revalidate:
        env === "development" ? undefined : revalidateTimeInMinutes * 60,
    },
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
          <Stack alignItems="flex-start" sx={{ gap: 4, mt: 4 }}>
            <XYZLogoWithLink width="5rem" />

            <Typography variant="h1">
              Termos e Condições dos Serviços {siteData.filialName}
            </Typography>

            <TermsAndConditions content={htmlToRender} />
          </Stack>
        </Container>
      </main>
    </div>
  );
}
