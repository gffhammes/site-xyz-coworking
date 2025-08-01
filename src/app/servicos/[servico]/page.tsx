import { Stack } from "@mui/material";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";

import { notFound } from "next/navigation";
import { ServiceDetailsHeroSection } from "@/components/ServiceDetailsPage/ServiceDetailsHeroSection/ServiceDetailsHeroSection";
import { BenefitsSection } from "@/components/ServiceDetailsPage/BenefitsSection/BenefitsSection";
import { StepperSection } from "@/components/ServiceDetailsPage/StepperSection/StepperSection";
import { FloatingCTA } from "@/components/ServiceDetailsPage/FloatingCTA/FloatingCTA";
import { PlansSection } from "@/components/ServiceDetailsPage/PlansSection/PlansSection";
import { siteData } from "@/data/sites";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ servico: string }>;
}) {
  const { servico } = await params;

  const service = siteData.services.find((service) => service.slug === servico);

  if (!service) return {};

  return {
    title: service.seoTitle || service.title,
    description: service.description,
    openGraph: {
      title: service.seoTitle || service.title,
      description: service.description,
      url: `https://bc.xyzcoworking.com/servicos/${service.slug}`,
      images: [
        {
          url: service.image,
          href: service.image,
        },
      ],
    },
  };
}

export default async function Servicos({
  params,
}: {
  params: Promise<{ servico: string }>;
}) {
  const { servico } = await params;

  const service = siteData.services.find((service) => service.slug === servico);

  if (!service) return notFound();

  return (
    <div>
      <main>
        <Stack gap={{ xs: 10, md: 20 }} sx={{ pb: { xs: 0, md: 20 } }}>
          <Stack>
            <ServiceDetailsHeroSection service={service} />

            <BenefitsSection service={service} />
          </Stack>

          <StepperSection service={service} />

          <PlansSection service={service} />

          <AdvantagesSection />

          <ReviewsSection />
        </Stack>

        <FloatingCTA service={service} />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return siteData.services.map((service) => ({
    servico: service.slug,
  }));
}

{
  /* <Stack gap={{ xs: 20 }}>
          <Stack>
            <ServicesHeroSection />

            <ServicesIntroduction />
          </Stack>

          <Stack gap={20} sx={{ pb: { xs: 0, md: 20 } }}>
            <ServicesServicesSection />

            <AdvantagesSection />

            <ReviewsSection />
          </Stack>
        </Stack> */
}
