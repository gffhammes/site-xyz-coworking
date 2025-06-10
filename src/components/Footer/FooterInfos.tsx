import { Stack, Typography } from "@mui/material";
import { FooterInfoTemplate } from "./FooterInfoTemplate";
import { NavigationList } from "../common/NavigationList";
import {
  formattedPhoneNumber,
  formattedWhatsApp,
  getWhatsappLink,
} from "@/utils/utils";
import parse from "html-react-parser";
import { siteData } from "@/data/sites";

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
            siteData.workingHours.reduce(
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
        <a href={siteData.address.href} target="_blank">
          <Typography>
            {siteData.address.line1} <br />
            {siteData.address.line2}
          </Typography>
        </a>
      </FooterInfoTemplate>

      <FooterInfoTemplate title="Contato">
        <Stack alignItems="flex-start">
          <a href={`tel:${siteData.contact.phoneNumber}`}>
            <Typography>Telefone: {formattedPhoneNumber}</Typography>
          </a>

          <a href={getWhatsappLink()}>
            <Typography>WhatsApp: {formattedWhatsApp}</Typography>
          </a>

          <a href={`mailto:${siteData.contact.email}`}>
            <Typography>E-mail: {siteData.contact.email}</Typography>
          </a>
        </Stack>
      </FooterInfoTemplate>
    </>
  );
};
