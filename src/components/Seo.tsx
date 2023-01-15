import SEO from "react-seo-component";
import { metaData } from "../_mock/seo";

// --------------------------------------------------

export default function Seo() {
  return (
    <>
      <SEO
        title={metaData.title}
        titleTemplate={metaData.siteName}
        titleSeparator={metaData.titleSeparator}
        description={metaData.description}
        image={metaData.image}
        pathname={metaData.siteUrl}
        siteLanguage={metaData.siteLanguage}
        siteLocale={metaData.siteLocale}
        twitterUsername={metaData.twitterUsername}
        author={metaData.author}
      />
    </>
  );
}
