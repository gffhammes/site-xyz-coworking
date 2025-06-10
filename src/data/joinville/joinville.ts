import { ISiteData } from "../types";
import { services } from "./services/services";

const contact = {
  phoneNumber: "5547999990294",
  whatsappNumber: "5547999990294",
  email: "jamal@xyzcoworking.com",
};

const workingHours = [
  "Segunda a sexta-feira das 8h as 19h",
  "Acesso 24h para clientes",
];

const address = {
  line1: "Rua 55 (Praça Higino Pio), n° 50 - Sala 01",
  line2: "Centro, Balneário Camboriú/SC",
  href: "https://www.google.com/maps/place/R.+55,+50+-+Centro,+Balne%C3%A1rio+Cambori%C3%BA+-+SC,+88330-681,+Brazil/@-26.9859901,-48.6354357,15.61z/data=!4m6!3m5!1s0x94d8b6015f1e5f4d:0xf16002cdc8ee5e78!8m2!3d-26.9866223!4d-48.6339933!16s%2Fg%2F11cpjygcv2?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
};

export const joinvilleData: ISiteData = {
  contact,
  services,
  workingHours,
  address,
  homeMetaData: {
    metaTitle: "Joinville",
    metaDescription: "Joinville",
  },
};
