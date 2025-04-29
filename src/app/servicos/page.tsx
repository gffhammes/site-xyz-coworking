import { Stack } from "@mui/material";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { ServicesHeroSection } from "@/components/ServicesPage/ServicesHeroSection/ServicesHeroSection";
import { ServicesIntroduction } from "@/components/ServicesPage/ServicesIntroduction/ServicesIntroduction";
import { ServicesServicesSection } from "@/components/ServicesPage/ServicesServicesSection/ServicesServicesSection";

export default function Servicos() {
  return (
    <div>
      <main>
        <Stack gap={{ xs: 20 }}>
          <Stack>
            <ServicesHeroSection />

            <ServicesServicesSection />
          </Stack>

          <Stack gap={20} sx={{ pb: { xs: 0, md: 20 } }}>
            <AdvantagesSection />

            <ReviewsSection />
          </Stack>
        </Stack>
      </main>
    </div>
  );
}
