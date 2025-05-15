export interface IFooterMapProps {}

export const FooterMap = (props: IFooterMapProps) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9334.83621991242!2d-48.63543568169169!3d-26.985990055771545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b6015f1e5f4d%3A0xf16002cdc8ee5e78!2sR.%2055%2C%2050%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-681%2C%20Brazil!5e0!3m2!1sen!2sus!4v1747179521127!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      id="Mapa"
    ></iframe>
  );
};
