export const addStructuredData = () => {
  return {
    __html: `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Am i available for freelancing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "<p>Yes</p>"
            }
          }
        
        ]
      }
  `,
  };
};
