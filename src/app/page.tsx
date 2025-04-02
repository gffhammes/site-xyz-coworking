import { Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="https://www.studiodireto.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_direto_preta.f833362f.png&w=3840&q=75"
            alt="Direto."
            height={100}
            width={300}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </main>

      <footer></footer>
    </div>
  );
}
