import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title = "Mohamed Darwish - Data Analyst & Power BI Specialist",
  description = "Portfolio of Mohamed Darwish, Data Analyst and Power BI Specialist with over 2 years of experience in data visualization and business intelligence.",
  image = "/og-image.jpg",
  url = "https://mohamedhdarwish.vercel.app/",
  type = "website"
}: SEOProps) {
  const fullTitle = title.includes("Mohamed Darwish") ? title : `${title} | Mohamed Darwish`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content="Mohamed Darwish" />
      <meta name="keywords" content="Mohamed Darwish, Data Analyst, Power BI Specialist, Power BI, Business Intelligence, Data Visualization, Analytics, Dashboard" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mohamed Darwish",
          "jobTitle": "Data Analyst & Power BI Specialist",
          "description": description,
          "url": url,
          "sameAs": []
        })}
      </script>
    </Helmet>
  );
}
