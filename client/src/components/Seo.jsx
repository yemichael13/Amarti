import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../api.js";

const DEFAULT_TITLE = "Aamaartii PLC | Integrated Agriculture, Eco-Tourism & Innovation";
const DEFAULT_DESCRIPTION =
  "Aamaartii PLC combines aquaculture, poultry, dairy, horticulture, eco-tourism, renewable energy, and smart farming technologies in Ethiopia.";

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  image = "/og-image.png",
  type = "website",
  noindex = false,
}) {
  const pageTitle = title ? `${title} | Aamaartii PLC` : DEFAULT_TITLE;
  const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Aamaartii PLC" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
