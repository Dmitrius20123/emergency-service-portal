import { Helmet } from "react-helmet-async";
import { SEOConfig } from "@/lib/seo";

interface SEOHeadProps {
  config: SEOConfig;
  structuredData?: any[];
}

const SEOHead = ({ config, structuredData = [] }: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      {config.keywords && <meta name="keywords" content={config.keywords} />}
      {config.author && <meta name="author" content={config.author} />}

      {/* Canonical URL */}
      {config.url && <link rel="canonical" href={config.url} />}

      {/* Open Graph */}
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:type" content={config.type || "website"} />
      {config.url && <meta property="og:url" content={config.url} />}
      {config.image && <meta property="og:image" content={config.image} />}
      {config.image && <meta property="og:image:width" content="1200" />}
      {config.image && <meta property="og:image:height" content="630" />}
      <meta property="og:locale" content="ru_RU" />
      <meta
        property="og:site_name"
        content="Служба экстренного реагирования 24/7"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      {config.image && <meta name="twitter:image" content={config.image} />}

      {/* Additional Meta Tags */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Article specific */}
      {config.publishedTime && (
        <meta
          property="article:published_time"
          content={config.publishedTime}
        />
      )}
      {config.modifiedTime && (
        <meta property="article:modified_time" content={config.modifiedTime} />
      )}
      {config.author && (
        <meta property="article:author" content={config.author} />
      )}

      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
