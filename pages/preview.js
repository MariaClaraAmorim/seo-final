import Image from "next/image";

import Head from "next/head";

import { useRouter } from "next/router";

export default function Preview(props) {
  const router = useRouter();

  const {
    title = "Caloi Velox 29",
    metaDescription = "A caloi velox é a sua porta de entrada para o mundo moutain bike. uma bike moderna com um visual arrojado para quem está em busca de aventuras sobre duas rodas",
  } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://seo-final.vercel.app/caloi.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:secure_url"
          content="https://seo-final.vercel.app/caloi.png"
        />
        <meta property="og:locale" content="pt-br" />

        <meta
          property="og:image:secure_url"
          content="https://seo-final.vercel.app/caloi.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="seo-final.vercel.app" />
        <meta property="twitter:url" content="https://seo-final.vercel.app/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://seo-final.vercel.app/caloi.png"
        />
        <meta
          name="twitter:image"
          content="https://seo-final.vercel.app/caloi.png"
        />
      </Head>
      <div class="panel">
        <div class="column">
          <div class="gallery">
            <img
              src="https://d3ugyf2ht6aenh.cloudfront.net/stores/002/139/087/products/sem-nome-1580450px-10241024px-10241024px-11-88ce7f24ce013b280416639560914528-480-0.png"
              alt=""
            />
          </div>

          <div>
            <h2>Descrição</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et dolor bibendum diam ullamcorper bibendum vitae a ex. Ut in
              ipsum lacus. Nullam dictum nisi sem, sed sagittis arcu ultricies
              ut. Mauris sodales nisl velit. Mauris quis velit at urna bibendum
              viverra. Pellentesque sodales laoreet nunc, et blandit libero
              lobortis eget. Pellentesque pellentesque sed mauris dictum
              porttitor.
            </p>
          </div>
        </div>

        <div class="container">
          <div class="condition">Novo</div>

          <div class="row">
            <h1 class="title">Bicicleta Caloi Velox 29 </h1>
            {/* <HeartIcon /> */}
          </div>

          <div class="dispatchTag">Enviando normalmente</div>

          <div class="priceCard">
            <div class="priceRow">
              <span className="symbol">R$</span>
              <span className="fraction">1.135</span>
              <span className="cents">23</span>
            </div>

            <div class="installmentsInfo">em 12x de R$ 94,60</div>
          </div>
        </div>
      </div>
    </>
  );
}
