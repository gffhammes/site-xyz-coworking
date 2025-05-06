import { balnearioData } from "@/data/balneario-camboriu/balneario-camboriu";

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

export const getMainWhatsappLink = (customText?: string) => {
  const phone = balnearioData.contact.whatsappNumber;
  const text =
    customText ??
    "Olá! Vim pelo site e gostaria de mais informações sobre o XYZ Coworking.";

  const link = `https://api.whatsapp.com/send/?phone=${phone}&text=${text}`;

  return link;
};

export const mainWhatsappLink = getMainWhatsappLink();
