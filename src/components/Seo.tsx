import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  name?: string;
  type?: string;
  imageUrl?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
};

const Seo = ({
  title,
  description,
  name,
  type = "website",
  imageUrl,
  keywords = [],
  author = "RoadmapPro",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SeoProps) => {
  const fullTitle = `${title} | RoadmapPro`;
  const siteUrl = window.location.href;
  const image = imageUrl || "https://i.imgur.com/3UPX5qN.png";
  const allKeywords = [
    "developer roadmap",
    "learning path",
    "programming guide",
    "tech career",
    "software development",
    "coding tutorial",
    ...keywords,
  ].join(", ");

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "name": fullTitle,
    "description": description,
    "url": siteUrl,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "RoadmapPro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.imgur.com/3UPX5qN.png",
      },
    },
    ...(type === "article" && {
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "articleSection": section,
      "keywords": allKeywords,
    }),
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph tags for Facebook, LinkedIn, etc. */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="RoadmapPro" />
      <meta property="og:locale" content="en_US" />
      {tags.length > 0 && (
        <meta property="article:tag" content={tags.join(", ")} />
      )}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@roadmappro" />
      <meta name="twitter:creator" content={name || "@roadmappro"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional meta tags for better SEO */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://i.imgur.com" />
    </Helmet>
  );
};

export default Seo;
