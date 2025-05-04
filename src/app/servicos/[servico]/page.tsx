import { Stack, Typography } from "@mui/material";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { ServicesHeroSection } from "@/components/ServicesPage/ServicesHeroSection/ServicesHeroSection";
import { ServicesIntroduction } from "@/components/ServicesPage/ServicesIntroduction/ServicesIntroduction";
import { ServicesServicesSection } from "@/components/ServicesPage/ServicesServicesSection/ServicesServicesSection";
import { IServiceItem, servicesItems } from "@/data/services";
import { notFound } from "next/navigation";
import { ServiceDetailsHeroSection } from "@/components/ServiceDetailsPage/ServiceDetailsHeroSection/ServiceDetailsHeroSection";
import { BenefitsSection } from "@/components/ServiceDetailsPage/BenefitsSection/BenefitsSection";
import { StepperSection } from "@/components/ServiceDetailsPage/StepperSection/StepperSection";
import { FloatingCTA } from "@/components/ServiceDetailsPage/FloatingCTA/FloatingCTA";
import { PlansSection } from "@/components/ServiceDetailsPage/PlansSection/PlansSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ servico: string }>;
}) {
  const { servico } = await params;

  const service = servicesItems.find((service) => service.target === servico);

  if (!service) return {};

  return {
    title: service.seoTitle || service.title,
    description: service.description || service.description,
    // Se quiser, pode reativar o Open Graph:
    // openGraph: {
    //   title: service.seoTitle || service.title,
    //   description: service.seoDescription || service.description,
    //   url: `https://www.seusite.com.br/servicos/${service.target}`,
    //   type: 'article',
    // },
  };
}

export default async function Servicos({
  params,
}: {
  params: Promise<{ servico: string }>;
}) {
  const { servico } = await params;

  const service = servicesItems.find((service) => service.target === servico);

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

        <FloatingCTA />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return servicesItems.map((service) => ({
    servico: service.target,
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
