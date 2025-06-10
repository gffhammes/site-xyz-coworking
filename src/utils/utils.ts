import { siteData } from "@/data/sites";

export const scrollTo = (id: string, offset?: number) => {
  const target = document.getElementById(id);

  if (!target) return;

  const targetOffsetTop = target.offsetTop;

  const getTopDistance = () => {
    return targetOffsetTop - (offset ?? 0);
  };

  const topDistance = getTopDistance();

  window.scrollTo({
    top: topDistance,
    behavior: "smooth",
  });
};

export const validateEmail = (email: string) => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const getWhatsappLink = (customText?: string) => {
  const phone = siteData.contact.whatsappNumber;

  const text =
    customText ??
    "Olá! Vim pelo site e gostaria de mais informações sobre o XYZ Coworking.";

  const link = `https://api.whatsapp.com/send/?phone=${phone}&text=${text}`;

  return link;
};

export const whatsappLink = getWhatsappLink();

export const getFormattedPhoneNumber = (phoneNumber: string) => {
  const digits = phoneNumber.replace(/\D/g, "");

  const localNumber = digits.startsWith("55") ? digits.slice(2) : digits;

  const prefixCut = digits.length === 12 ? 6 : 7;

  // Extrai DDD, prefixo e sufixo
  const ddd = localNumber.slice(0, 2);
  const prefix = localNumber.slice(2, prefixCut);
  const suffix = localNumber.slice(prefixCut, 11);

  return `(${ddd}) ${prefix}-${suffix}`;
};

export const formattedPhoneNumber = getFormattedPhoneNumber(
  siteData.contact.phoneNumber
);

export const formattedWhatsApp = getFormattedPhoneNumber(
  siteData.contact.whatsappNumber
);
interface IGetElementIdArgs {
  section: string;
  action: string;
}

export const getElementId = ({
  section,
  action,
}: IGetElementIdArgs): string => {
  if (typeof window === "undefined") {
    return "";
  }

  const pathname = window.location.pathname;
  const page =
    pathname
      .replace(/^\/|\/$/g, "") // remove barras no início/fim
      .replace(/\//g, "-") // troca / por -
      .replace(/\s+/g, "-") // troca espaços por -
      .toLowerCase() || "home";

  return `click---${page}---${section}---${action}`;
};
