import Head from "next/head";

import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();

  const {
    title = "Home",
    metaDescription = "Essa é a descrição teste para o seo do dantas bike",
  } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://seo-final.vercel.app/bikeOGGI_2.jpg"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:secure_url"
          content="https://seo-final.vercel.app/bikeOGGI.png"
        />
        <meta property="og:locale" content="pt-br" />

        <meta
          property="og:image:secure_url"
          content="https://seo-final.vercel.app/bikeOGGI_2.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="seo-final.vercel.app" />
        <meta property="twitter:url" content="https://seo-final.vercel.app/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://seo-final.vercel.app/bikeOGGI.png"
        />
        <meta
          name="twitter:image"
          content="https://seo-final.vercel.app/bikeOGGI_2.jpg"
        />
      </Head>
      <div>
        <h1 className="title">Dantas Bikes SEO final</h1>
      </div>
    </>
  );
}
