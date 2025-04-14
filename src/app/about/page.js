// app/about-us/page.js
import { getMetaData } from "@/_services/otherService";
import AboutUs from "@/components/AboutUs/AboutUs";
import Head from "next/head";
//generate meta data
export async function generateMetadata() {
  const metaData = await getMetaData({ slug: `about` });
  if (metaData) {
    return metaData;
  }
}

export async function generateSchema() {
  // Example schema data for the About Us page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Us",
    "description": "Learn more about our company and values.",
    "url": "https://yourwebsite.com/about-us",
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourwebsite.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "WebPageElement",
      "name": "About Our Company",
      "description": "Details about our company, mission, and team."
    }
  };

  return schemaData;
}

export default async function AboutUsPage() {
  const schema = await generateSchema();

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About Us",
            description: "Learn more about our company and values.",
            url: "https://yourwebsite.com/about-us",
            publisher: {
              "@type": "Organization",
              name: "Your Company Name",
              logo: {
                "@type": "ImageObject",
                url: "https://yourwebsite.com/logo.png",
              },
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "About Our Company",
              description: "Details about our company, mission, and team.",
            },
          })}
        </script>
      </Head>
      <AboutUs />
    </>
  );
}
