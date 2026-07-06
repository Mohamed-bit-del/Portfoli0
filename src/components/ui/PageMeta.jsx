import { Helmet } from "react-helmet-async";
import { buildSeo } from "../../utils/buildSeo";

export default function PageMeta(props) {
  const seo = buildSeo(props);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seo.twitterHandle} />
    </Helmet>
  );
}
