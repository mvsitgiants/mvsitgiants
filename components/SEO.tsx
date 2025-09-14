import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
}

// Added By Bhushan on 15_01_2025 - SEO component for dynamic meta tags
const SEO: React.FC<SEOProps> = ({
  title = "MVS IT Giants - Leading Software Development Company",
  description = "MVS IT Giants is a premier software development company offering custom software development, mobile app development, cloud solutions, AI/ML services, and IT consulting.",
  keywords = "software development company, custom software development, mobile app development, web development, cloud solutions, AI machine learning, UI UX design, DevOps, IT consulting",
  canonical = "https://mvsitgiants.com",
  ogImage = "https://mvsitgiants.com/logomvs.png",
  ogType = "website",
  structuredData
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonical);
      document.head.appendChild(canonicalLink);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) ogImageMeta.setAttribute('content', ogImage);
    
    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) ogTypeMeta.setAttribute('content', ogType);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    
    const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageMeta) twitterImageMeta.setAttribute('content', ogImage);
    
    // Add structured data if provided
    if (structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(structuredData);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData]);

  return null;
};

export default SEO;
