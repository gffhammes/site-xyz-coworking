import { Stack, Typography } from "@mui/material";
import { FooterInfoTemplate } from "./FooterInfoTemplate";
import { NavigationList } from "../common/NavigationList";
import {
  formattedPhoneNumber,
  formattedWhatsApp,
  getWhatsappLink,
} from "@/utils/utils";
import { balnearioData } from "@/data/balneario-camboriu/balneario-camboriu";
import parse from "html-react-parser";

export interface IFooterInfosProps {}

export const FooterInfos = (props: IFooterInfosProps) => {
  return (
    <>
      <FooterInfoTemplate title="Mapa do Site">
        <NavigationList direction="column" gap={0.5} theme="dark" />
      </FooterInfoTemplate>

      <FooterInfoTemplate title="Horário de Funcionamento">
        <Typography>
          {parse(
            balnearioData.workingHours.reduce(
              (previousValue, currentValue, index) => {
                if (index === 0) return `- ${currentValue}`;

                return `${previousValue}<br/>- ${currentValue}`;
              },
              ""
            )
          )}
        </Typography>
      </FooterInfoTemplate>

      <FooterInfoTemplate title="Endereço">
        <a href={balnearioData.address.href} target="_blank">
          <Typography>
            {balnearioData.address.line1} <br />
            {balnearioData.address.line2}
          </Typography>
        </a>
      </FooterInfoTemplate>

      <FooterInfoTemplate title="Contato">
        <Stack alignItems="flex-start">
          <a href={`tel:${balnearioData.contact.email}`}>
            <Typography>Telefone: {formattedPhoneNumber}</Typography>
          </a>

          <a href={getWhatsappLink()}>
            <Typography>WhatsApp: {formattedWhatsApp}</Typography>
          </a>

          <a href={`mailto:${balnearioData.contact.email}`}>
            <Typography>E-mail: {balnearioData.contact.email}</Typography>
          </a>
        </Stack>
      </FooterInfoTemplate>
    </>
  );
};
