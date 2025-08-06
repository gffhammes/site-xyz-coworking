import { Box, Container, Stack, Typography } from "@mui/material";
import { XYZLogo } from "@/components/common/XYZLogo";
import { siteData } from "@/data/sites";
import { redirect, RedirectType } from "next/navigation";
import { PriceTable } from "@/components/PriceTable/PriceTable";

export default function TabelaDePrecos() {
  if (!siteData.tabelaDePrecos) {
    redirect("/", RedirectType.replace);
  }

  return (
    <div>
      <main>
        <Container>
          <Stack sx={{ gap: 4, mt: 4 }}>
            <XYZLogo width="5rem" />

            <Typography variant="h1">Tabela de Preços</Typography>

            <PriceTable />
          </Stack>
        </Container>
      </main>
    </div>
  );
}
