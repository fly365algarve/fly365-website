import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { site } from "../config/site";

type SeoProps = { title: string; description: string; faq?: readonly (readonly [string, string])[] };

export function Seo({ title, description, faq }: SeoProps) {
  const [location] = useLocation();
  const fullTitle = `${title} | ${site.name}`;
  const canonicalUrl = new URL(location, site.domain).toString();
  const imageUrl = new URL("/opengraph.jpg", site.domain).toString();
  const business = {
    "@context": "https://schema.org", "@type": "LocalBusiness",
    name: site.name, url: site.domain, email: site.contact.email,
    telephone: [...site.contact.portugalPhones.map((phone) => phone.tel), site.contact.ukPhone.tel],
    address: { "@type": "PostalAddress", streetAddress: "Aeródromo de Lagos", postalCode: "8600", addressLocality: "Lagos", addressCountry: "PT" },
    geo: { "@type": "GeoCoordinates", latitude: site.aerodrome.lat, longitude: site.aerodrome.lng },
    image: new URL("/images/fly365-algarve-lagos-operation-837.webp", site.domain).toString(),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(business).replace(/</g, "\\u003c")}</script>
      {location === "/" && faq?.length ? <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      }).replace(/</g, "\\u003c")}</script> : null}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
