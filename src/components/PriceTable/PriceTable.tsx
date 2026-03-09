"use client";

import { parseCSV } from "@/utils/utils";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "servico",
    headerName: "Serviço",
    flex: 1,
  },
  {
    field: "valor2025",
    headerName: "Preço",
    type: "number",
    width: 110,
  },
];

export interface IPriceTableProps {
  content: string;
}

export const PriceTable = ({ content }: IPriceTableProps) => {
  const formatedPrices = parseCSV(content, ["servico", "valor2025"]);

  const rows = formatedPrices.map((item) => ({
    ...item,
    id: item.servico,
  }));

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick />
    </Box>
  );
};
