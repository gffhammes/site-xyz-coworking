export interface IFooterMapProps {}

export const FooterMap = (props: IFooterMapProps) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.8442443409614!2d-48.634637030362256!3d-26.986622298537704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b6015f1e5f4d%3A0xf16002cdc8ee5e78!2sR.%2055%2C%2050%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-681%2C%20Brazil!5e0!3m2!1sen!2sus!4v1744241841128!5m2!1sen!2sus"
      width="100%"
      height="200"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
