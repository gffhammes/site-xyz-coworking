import Script from "next/script";

export interface IGTMScriptProps {
  id: string;
}

export const GTMScript = ({ id }: IGTMScriptProps) => {
  return (
    <>
      <Script
        id="gtm-script"
        src={`https://www.googletagmanager.com/gtm.js?id=${id}`}
        strategy="lazyOnload"
      />
      <Script id="gtm-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>
    </>
  );
};
