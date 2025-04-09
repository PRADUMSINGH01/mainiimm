"use client";
import React, { useState, useEffect } from "react"; // <-- Import React here

import Head from "next/head";
import PropTypes from "prop-types"; // Import PropTypes for validation
import {
  FaChartLine,
  FaRocket,
  FaDollarSign,
  FaUsers,
  FaIndustry,
  FaBalanceScale,
  FaLightbulb,
  FaCarBattery,
  FaChargingStation,
  FaCalendarAlt,
  FaTag, // Add any other icons you might use in data
  // Add other icons from react-icons/* as needed
} from "react-icons/fa";
import { FiChevronDown, FiArrowUp } from "react-icons/fi";

// --- Icon Mapping ---
// Maps string identifiers (stored in DB) to actual React icon components
const iconMap = {
  FaChartLine: <FaChartLine />,
  FaRocket: <FaRocket />,
  FaDollarSign: <FaDollarSign />,
  FaUsers: <FaUsers />,
  FaIndustry: <FaIndustry />,
  FaBalanceScale: <FaBalanceScale />,
  FaLightbulb: <FaLightbulb />,
  FaCarBattery: <FaCarBattery />,
  FaChargingStation: <FaChargingStation />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaTag: <FaTag />,
  // Add any other icons you plan to use here
  // It's generally better to keep this map relatively stable
};

// --- The Component ---
const BusinessCaseStudy = ({ caseStudyData }) => {
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);
  const s = caseStudyData;
  const {
    metaTitle,
    metaDescription,
    metaKeywords,
    headerTitle,
    headerSubtitle,
    headerInfoItems = [], // Default to empty array
    keyMetrics = [], // Default to empty array
    sectionsContent = {}, // Default to empty object
    themeColor = "blue", // Default theme color if not provided (e.g., 'red', 'green')
  } = caseStudyData || {}; // Add default empty object for safety
  // --- Static Section Structure ---
  // Kept static for consistent layout, but content is dynamic
  // Icons here are also static, matching the visual structure
  const sections = [
    {
      id: "executive-summary",
      title: "Executive Summary",
      icon: <FaChartLine />,
    },
    { id: "market-analysis", title: "Market Analysis", icon: <FaIndustry /> },
    { id: "financials", title: "Financial Overview", icon: <FaDollarSign /> },
    {
      id: "growth-strategy",
      title: "Growth & Innovation Strategy",
      icon: <FaRocket />,
    },
    {
      id: "competitive-landscape",
      title: "Competitive Landscape",
      icon: <FaBalanceScale />,
    },
    {
      id: "consumer-insights",
      title: "Consumer & Brand Insights",
      icon: <FaUsers />,
    },
    {
      id: "conclusion",
      title: "Conclusion & Future Outlook",
      icon: <FaLightbulb />,
    },
  ];

  // Scroll progress handler (remains the same)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollableHeight = scrollHeight - clientHeight;
      setProgress(
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Dynamic Section Content Renderer ---
  const renderSectionContent = (sectionId) => {
    // Get HTML content from props based on sectionId
    const sectionHtmlContent =
      sectionsContent[sectionId]?.htmlContent ||
      "<p>Content not available for this section.</p>";

    // **IMPORTANT SECURITY NOTE:**
    // If 'sectionHtmlContent' comes from a database or user input,
    // it MUST be sanitized before using dangerouslySetInnerHTML to prevent XSS attacks.
    // Use a library like DOMPurify on the server-side or client-side before rendering.
    // Example (needs DOMPurify installed: npm install dompurify):
    // import DOMPurify from 'dompurify';
    // const cleanHtml = DOMPurify.sanitize(sectionHtmlContent);

    return (
      <div
        className="prose prose-lg max-w-none text-gray-700 space-y-4" // Apply base prose styling
        dangerouslySetInnerHTML={{
          __html: /* cleanHtml || */ sectionHtmlContent,
        }} // Use sanitized HTML!
      />
    );
  };

  // --- Helper to get Tailwind color classes ---
  // Basic example, expand as needed
  const getColorClass = (colorName, intensity = 600, type = "text") => {
    // Add more colors and types (bg, border, ring) as needed
    const validIntensities = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const safeIntensity = validIntensities.includes(intensity)
      ? intensity
      : 600;

    switch (type) {
      case "text":
        return `text-${colorName}-${safeIntensity}`;
      case "bg":
        return `bg-${colorName}-${safeIntensity}`;
      case "border":
        return `border-${colorName}-${safeIntensity}`;
      case "ring":
        return `ring-${colorName}-${safeIntensity}`;
      case "progress":
        return `bg-${colorName}-${safeIntensity}`; // For progress bar
      case "gradientFrom":
        return `from-${colorName}-50`; // Example for gradient
      case "gradientTo":
        return `to-${colorName}-100`; // Example for gradient
      default:
        return `text-${colorName}-${safeIntensity}`;
    }
  };

  // --- Render JSX ---
  if (!caseStudyData) {
    // Optional: Render loading state or placeholder if data isn't ready
    return <div>Loading case study...</div>;
  }

  return (
    <article
      className={`min-h-screen bg-gradient-to-br ${getColorClass(
        themeColor,
        50,
        "gradientFrom"
      )} to-slate-100`}
    >
      <Head>
        <title>{metaTitle || "Business Case Study"}</title>
        <meta name="description" content={metaDescription || ""} />
        <meta name="keywords" content={metaKeywords || ""} />
      </Head>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-300 z-50">
        <div
          className={`h-full ${getColorClass(
            themeColor,
            600,
            "progress"
          )} transition-all duration-100 ease-linear`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {headerTitle || "Case Study Title"}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{headerSubtitle || ""}</p>
          {/* Dynamic Header Info Items */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 text-gray-700">
            {headerInfoItems.map((item, index) => (
              <span
                key={index}
                className="flex items-center text-sm md:text-base"
              >
                {iconMap[item.iconId] ? (
                  React.cloneElement(iconMap[item.iconId], {
                    className: `mr-2 ${getColorClass(themeColor, 600, "text")}`,
                  })
                ) : (
                  <FaTag
                    className={`mr-2 ${getColorClass(themeColor, 600, "text")}`}
                  /> // Default icon
                )}
                {item.text}
              </span>
            ))}
          </div>
        </header>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${
                metric.borderColor
                  ? `border-${metric.borderColor}`
                  : getColorClass(themeColor, 500, "border")
              } transform hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {metric.title}
              </h3>
              <p
                className={`text-3xl font-bold ${
                  metric.valueColor
                    ? `text-${metric.valueColor}`
                    : getColorClass(themeColor, 600, "text")
                }`}
              >
                {metric.value}
              </p>
              <p className="text-sm text-gray-500">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Table of Contents (Structure remains static) */}
        <nav className=" hidden md:flex mb-16 bg-white rounded-xl shadow-md p-6 sticky top-5 z-40 border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Case Study Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex flex-col sm:flex-row items-center p-3 rounded-lg hover:bg-${themeColor}-50 transition-colors text-center sm:text-left ${
                  activeSection === section.id
                    ? `bg-${themeColor}-100 font-semibold`
                    : ""
                }`}
                onClick={(e) => {
                  /* Smooth scroll logic remains the same */
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  if (element) {
                    const offsetTop = element.offsetTop - 100;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                  }
                  setActiveSection(section.id);
                }}
              >
                {/* Icon color now uses theme */}
                {React.cloneElement(section.icon, {
                  className: `mb-1 sm:mb-0 sm:mr-2 text-xl ${getColorClass(
                    themeColor,
                    600,
                    "text"
                  )}`,
                })}
                <span className="text-sm">{section.title}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Case Study Sections (Rendered using data) */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-16 scroll-mt-28"
            ref={(el) => {
              /* Intersection Observer logic remains the same */
              if (!el) return;
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    setActiveSection(section.id);
                  }
                },
                { threshold: [0.3, 0.7], rootMargin: "-100px 0px -40% 0px" }
              );
              observer.observe(el);
            }}
          >
            <div
              className={`bg-white rounded-xl shadow-sm p-6 sm:p-8 transition-all duration-300 ease-in-out border border-gray-100 hover:shadow-lg ${
                activeSection === section.id
                  ? `ring-2 ring-${themeColor}-300`
                  : ""
              }`}
            >
              <div className="flex items-center mb-6">
                {/* Icon color now uses theme */}
                <div
                  className={`flex-shrink-0 p-3 bg-gradient-to-r ${getColorClass(
                    themeColor,
                    50,
                    "gradientFrom"
                  )} ${getColorClass(
                    themeColor,
                    100,
                    "gradientTo"
                  )} rounded-lg mr-4 shadow-inner`}
                >
                  {React.cloneElement(section.icon, {
                    className: `text-2xl ${getColorClass(
                      themeColor,
                      600,
                      "text"
                    )}`,
                  })}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              {/* Render dynamic content */}
              <div
                className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
                  activeSection === section.id
                    ? "max-h-[5000px]"
                    : "max-h-96 opacity-90 md:max-h-[400px]"
                }`}
              >
                {renderSectionContent(section.id)}
              </div>
            </div>
          </section>
        ))}

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 ${getColorClass(
            themeColor,
            600,
            "bg"
          )} text-white p-3 rounded-full shadow-lg hover:${getColorClass(
            themeColor,
            700,
            "bg"
          )} transition-all duration-300 z-50 ${
            progress > 10
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          } `}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </button>
      </div>
    </article>
  );
};

// --- PropTypes Validation ---
BusinessCaseStudy.propTypes = {
  caseStudyData: PropTypes.shape({
    metaTitle: PropTypes.string.isRequired,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string,
    headerTitle: PropTypes.string.isRequired,
    headerSubtitle: PropTypes.string,
    themeColor: PropTypes.string, // e.g., 'red', 'blue', 'green'
    headerInfoItems: PropTypes.arrayOf(
      PropTypes.shape({
        iconId: PropTypes.string.isRequired, // Key from iconMap e.g., "FaIndustry"
        text: PropTypes.string.isRequired,
      })
    ),
    keyMetrics: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        description: PropTypes.string,
        borderColor: PropTypes.string, // Tailwind color class e.g., "red-500"
        valueColor: PropTypes.string, // Optional Tailwind text color e.g., "green-600"
      })
    ),
    sectionsContent: PropTypes.objectOf(
      PropTypes.shape({
        // Object keyed by sectionId
        htmlContent: PropTypes.string.isRequired, // Sanitized HTML content
      })
    ),
  }).isRequired, // Make the whole data object required
};

export default BusinessCaseStudy;

// --- Example Usage in a Next.js Page (e.g., pages/case-studies/[slug].js) ---

/*
import BusinessCaseStudy from '../../components/BusinessCaseStudy'; // Adjust path
// Function to fetch data from your DB based on slug
import { fetchCaseStudyBySlug } from '../../lib/api'; // Assume this exists

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const caseStudyData = await fetchCaseStudyBySlug(slug); // Fetch data

  if (!caseStudyData) {
    return { notFound: true }; // Handle case where data isn't found
  }

  // **IMPORTANT:** Sanitize HTML content here before passing to props
  // Example using DOMPurify (run on the server)
  // import DOMPurify from 'isomorphic-dompurify'; // Use isomorphic version on server
  // for (const sectionId in caseStudyData.sectionsContent) {
  //   if (caseStudyData.sectionsContent[sectionId]?.htmlContent) {
  //     caseStudyData.sectionsContent[sectionId].htmlContent =
  //       DOMPurify.sanitize(caseStudyData.sectionsContent[sectionId].htmlContent);
  //   }
  // }


  return {
    props: {
      caseStudyData,
    },
    revalidate: 3600, // Revalidate data every hour, for example
  };
}

export async function getStaticPaths() {
  // Fetch all available slugs from your DB
  // const slugs = await fetchAllCaseStudySlugs();
  // const paths = slugs.map((slug) => ({ params: { slug } }));
  // return { paths, fallback: 'blocking' }; // Or fallback: true / false
   return { paths: [], fallback: 'blocking' }; // Placeholder
}


// --- The Page Component ---
function CaseStudyPage({ caseStudyData }) {
  return <BusinessCaseStudy caseStudyData={caseStudyData} />;
}

export default CaseStudyPage;

*/
