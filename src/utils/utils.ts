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
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const getWhatsappLink = (customText?: string) => {
  const phone = siteData.contact.whatsappNumber;

  const text =
    customText ??
    "Olá! Vim pelo site e gostaria de mais informações sobre o XYZ Coworking.";

  const encodedText = encodeURIComponent(text);
  const link = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedText}`;

  return link;
};

export const whatsappLink = getWhatsappLink();

export const getFormattedPhoneNumber = (phoneNumber: string) => {
  const digits = phoneNumber.replace(/\D/g, "");

  const localNumber = digits.startsWith("55") ? digits.slice(2) : digits;

  const prefixCut = localNumber.length === 9 ? 5 : 6;

  const ddd = localNumber.slice(0, 2);
  const prefix = localNumber.slice(2, prefixCut);
  const suffix = localNumber.slice(prefixCut);

  return `+55 ${ddd} ${prefix}-${suffix}`;
};

export const formattedPhoneNumber = getFormattedPhoneNumber(
  siteData.contact.phoneNumber,
);

export const formattedWhatsApp = getFormattedPhoneNumber(
  siteData.contact.whatsappNumber,
);
interface IGetElementIdArgs {
  section: string;
  action: string;
  isGoogle?: boolean;
}

export const getElementId = ({
  section,
  action,
  isGoogle = false,
}: IGetElementIdArgs): string => {
  if (typeof window === "undefined") {
    return "";
  }

  const pathname = window.location.pathname;

  // Remove /google do início ou final: /google/servicos ou /servicos/google
  const cleanPathname = pathname
    .replace(/^\/google(\/|$)/, "/") // Remove do início
    .replace(/\/google$/, ""); // Remove do final

  const page =
    cleanPathname
      .replace(/^\/|\/$/g, "") // remove barras no início/fim
      .replace(/\//g, "-") // troca / por -
      .replace(/\s+/g, "-") // troca espaços por -
      .toLowerCase() || "home";

  const googleSuffix = isGoogle ? "---google" : "";
  return `click---${page}---${section}---${action}${googleSuffix}`;
};

export function decodeHtmlEntities(str: string): string {
  const map: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  };

  return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (match) => map[match]);
}

export function formatDateISOToBR(iso: string): string {
  const d = new Date(iso);
  const dia = String(d.getDate()).padStart(2, "0");
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const ano = d.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function splitCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "," && !insideQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

export function parseCSV(csv: string, keys: string[]) {
  const lines = csv.replace(/\r/g, "").trim().split("\n");

  // remove header
  lines.shift();

  return lines.map((line) => {
    const values = splitCSVLine(line);

    const obj: Record<string, string> = {};
    keys.forEach((key, index) => {
      obj[key] = values[index] ?? "";
    });

    return obj;
  });
}
