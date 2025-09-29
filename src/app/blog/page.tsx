import { Stack } from "@mui/material";
import { BlogTest } from "@/components/Blog/BlogTest";
import { Metadata } from "next";
import { BlogHeroSection } from "@/components/Blog/BlogHeroSection";

export const metadata: Metadata = {
  title: "Blog XYZ Coworking",
  description:
    "Descubra conteúdos sobre empreendedorismo, gestão, coworking e produtividade. Dicas práticas e insights para transformar sua rotina profissional e pessoal.",
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

export default function Blog() {
  return (
    <div>
      <main>
        <Stack>
          <BlogHeroSection />

          <BlogTest />
          {/* <Stack>
            <ServicesHeroSection />

            <ServicesServicesSection />
          </Stack>

          <Stack gap={20} sx={{ pb: { xs: 0, md: 20 } }}>
            <AdvantagesSection />

            <ReviewsSection />
          </Stack> */}
        </Stack>
      </main>
    </div>
  );
}
