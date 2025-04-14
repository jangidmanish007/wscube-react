import React from "react";

const Schema = ({ pathname }) => {
  let schemaData = null;

  if (pathname == '/about') {
    schemaData = `{
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "WsCube Tech",
      "url": "https://www.wscubetech.com/",
      "logo": "https://www.wscubetech.com/images/wscube-tech-logo-2.svg",
      "sameAs": [
        "https://www.facebook.com/wscubetech.india",
        "https://twitter.com/wscubetechindia",
        "https://www.instagram.com/wscubetechindia/",
        "https://www.youtube.com/@wscubetech",
        "https://in.linkedin.com/company/wscubetechindia"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Laxmi Tower, Bhaskar Circle, Ratanada",
        "addressLocality": "Jodhpur",
        "addressRegion": "Rajasthan",
        "postalCode": "342001",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 9269698122",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": [
          "English",
          "Hindi"
        ]
      }
    }`;
  } else if (pathname == '/jodhpur') {
    schemaData = `{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WsCube Tech",
    "image": "https://www.wscubetech.com/images/wscube-tech-logo-2.svg",
    "@id": "https://www.wscubetech.com/jodhpur",  
    "url": "https://www.wscubetech.com/jodhpur",
    "telephone": "+91 9024244886",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "First Floor, Laxmi Tower, Bhaskar Cir, Ratanada, Jodhpur, Rajasthan 342001",
      "addressLocality": "Jodhpur",
      "postalCode": "342001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.2730262,
      "longitude": 73.0262668
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/wscubetech.india",
      "https://twitter.com/wscubetechindia",
      "https://www.instagram.com/wscubetechindia/",
      "https://www.youtube.com/@wscubetech",
      "https://in.linkedin.com/company/wscubetechindia"
    ]
    }`
  } else if (pathname == '/jaipur') {
    schemaData = `{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "WsCube Tech",
      "image": "https://www.wscubetech.com/images/wscube-tech-logo-2.svg",
      "@id": "https://www.wscubetech.com/jaipur",
      "url": "https://www.wscubetech.com/jaipur",
      "telephone": "+91 9257155617",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ground floor, Plot no 21, Manav Ashram Colony, Vasundhara Colony, Gopal Pura Mode",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302018",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.862734,
        "longitude": 75.795300
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      },
      "sameAs": [
        "https://www.facebook.com/wscubetech.india",
        "https://twitter.com/wscubetechindia",
        "https://www.instagram.com/wscubetechindia/",
        "https://www.youtube.com/@wscubetech",
        "https://in.linkedin.com/company/wscubetechindia"
      ]
    }`
  } else if (pathname == '/seo-course') {
    schemaData = `{
  "@context": "http://schema.org",
  "@type": "Course",
  "name": "Online SEO Certification Course",
  "description": "Learn SEO online and become a certified SEO expert with India’s best digital marketing institute. Enroll now in our SEO course online.",
  "inLanguage": "en",
  "provider": {
    "@type": "Organization",
    "name": "WsCube Tech",
    "sameAs": "https://www.wscubetech.com/seo-course",
    "image": "https://www.wscubetech.com/images/ws-cube-white-logo.svg"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://www.wscubetech.com/seo-course"
    },
    "courseWorkload": "P2M"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.wscubetech.com/seo-course",
    "category": "Paid"
  }
}`
  } else if (pathname == '/digital-marketing-course') {
    schemaData = `{
  "@context": "http://schema.org",
  "@type": "Course",
  "name": "Online Digital Marketing Course",
  "description": "Become an Expert Digital Marketer with skill-based digital marketing course online in India, with certification, internship, and job assistance. Enroll today!",
  "inLanguage": "en",
  "provider": {
    "@type": "Organization",
    "name": "WsCube Tech",
    "sameAs": "https://www.wscubetech.com/digital-marketing-course",
    "image": "https://www.wscubetech.com/images/ws-cube-white-logo.svg"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://www.wscubetech.com/digital-marketing-course"
    },
    "courseWorkload": "P5M"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.wscubetech.com/digital-marketing-course",
    "category": "Paid"
  }
}`
  } else if (pathname == '/performance-marketing-course') {
    schemaData = `{
  "@context": "http://schema.org",
  "@type": "Course",
  "name": "Online Performance Marketing Course",
  "description": "Join our Online Performance Marketing Course and master the skills to drive measurable results. Learn from industry experts and earn your certification today!",
  "inLanguage": "en",
  "provider": {
    "@type": "Organization",
    "name": "WsCube Tech",
    "sameAs": "https://www.wscubetech.com/performance-marketing-course",
    "image": "https://www.wscubetech.com/images/ws-cube-white-logo.svg"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://www.wscubetech.com/performance-marketing-course"
    },
    "courseWorkload": "P2M"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.wscubetech.com/performance-marketing-course",
    "category": "Paid"
  }
}`
  }

  return (
    schemaData && (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    )
  );
};

export default Schema;