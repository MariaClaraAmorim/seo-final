import Head from "next/head";

import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();

  const {
    title = "Loja online Dantas Bike",
    metaDescription = "Compre produtos de Dantas Bikes por internet. Temos ofertas, bicicletas e mais. Faça seu pedido, pague-o online e receba onde quiser.",
  } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://seo-final.vercel.app/logo.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:secure_url"
          content="https://seo-final.vercel.app/logo.png"
        />
        <meta property="og:locale" content="pt-br" />

        <meta
          property="og:image:secure_url"
          content="https://seo-final.vercel.app/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="seo-final.vercel.app" />
        <meta property="twitter:url" content="https://seo-final.vercel.app/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://seo-final.vercel.app/logo.png"
        />
        <meta
          name="twitter:image"
          content="https://seo-final.vercel.app/logo.png"
        />
      </Head>
      <div>
        <h1 className="title">Dantas Bikes SEO final</h1>
      </div>

      <div id="wrap">
        <div id="columns" class="columns_1">
          <a href="/preview">
            <figure>
              <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/002/139/087/products/sem-nome-1580450px-10241024px-10241024px-11-88ce7f24ce013b280416639560914528-480-0.png" />
              <figcaption>Bicicleta Caloi Velox 29</figcaption>
              <span class="price">$ 1.135 23</span>
              <a class="button" href="#">
                Comprar
              </a>
            </figure>
          </a>
        </div>
      </div>
    </>
  );
}
