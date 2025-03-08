import Head from "next/head";

export const metadata = {
  title: "Apple's Garage Era: Business Case Study of Steve Jobs' Leadership",
  description:
    "In-depth analysis of Apple's founding period, early business strategies, and Steve Jobs' leadership style. Explore how a garage startup revolutionized the tech industry.",
  keywords: [
    "Apple case study",
    "Steve Jobs leadership",
    "Apple I development",
    "Tech startup strategy",
    "Business model analysis",
    "Entrepreneurship case study",
    "Apple history",
    "Silicon Valley startups",
    "Technology innovation",
    "Business strategy",
  ],
  openGraph: {
    title: "Apple Garage Era: Business Strategy Case Study",
    description:
      "Detailed analysis of Apple's early business decisions and leadership strategies",
    url: "https://yourdomain.com/case-studies/apple-garage-era",
    type: "article",
    images: [
      {
        url: "https://yourdomain.com/images/apple-garage-og.jpg",
        width: 1200,
        height: 630,
        alt: "Apple Garage Case Study Visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apple's Founding Strategy Case Study",
    description:
      "Analyzing Steve Jobs' early leadership and Apple's business model",
    images: "https://yourdomain.com/images/apple-garage-twitter.jpg",
  },
};

const AppleCaseStudy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: "Apple's Garage Era Business Analysis",
    description:
      "Comprehensive business case study of Apple's founding period and early strategies",
    image: "https://yourdomain.com/images/apple-garage-case-study.jpg",
    author: {
      "@type": "Organization",
      name: "Tech Business Insights",
    },
    publisher: {
      "@type": "Organization",
      name: "Business Case Studies Hub",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png",
      },
    },
    datePublished: "2024-03-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://yourdomain.com/case-studies/apple-garage-era",
    },
  };

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://yourdomain.com/case-studies/apple-garage-era"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <main className="min-h-screen bg-gray-50 py-12">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <header className="mb-12 text-center">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
              <ol className="flex justify-center space-x-2">
                <li>
                  <a href="/" className="hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>/</li>
                <li>
                  <a href="/case-studies" className="hover:text-gray-900">
                    Case Studies
                  </a>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-gray-900">
                  Apple Garage Era
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Apple&#39;s Garage Era: A Business Strategy Case Study
            </h1>

            <div className="bg-black p-6 rounded-2xl shadow-lg mb-8">
              <p className="text-gray-200 text-lg leading-relaxed">
                {`1976 Startup Analysis: Explore how Steve Jobs and Steve Wozniak transformed `}
                {`a $1,300 investment into a tech empire. This case study examines `}
                {`early business decisions, product strategies, and leadership approaches.`}
              </p>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Founding Challenges Section */}
            <section aria-labelledby="early-challenges">
              <h2
                id="early-challenges"
                className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4"
              >
                Foundational Challenges: Building Apple Computer
              </h2>

              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">
                    Financial Constraints & Resource Management
                  </h3>
                  <p className="text-gray-600">
                    Initial capital: $1,300 from selling Jobs&#39; VW bus and
                    Wozniak&#39;s calculator. Strategic prioritization of
                    component sourcing and minimal overhead costs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">
                    Market Validation Strategy
                  </h3>
                  <p className="text-gray-600">
                    Targeting hobbyist market through Homebrew Computer Club.
                    Early adoption of direct sales model to maintain margins.
                  </p>
                </div>
              </div>
            </section>

            {/* Product Development Section */}
            <section aria-labelledby="product-evolution" className="mb-16">
              <h2
                id="product-evolution"
                className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4"
              >
                Product Strategy: From Apple I to Market Dominance
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">
                    MVP Approach: Apple I (1976)
                  </h3>
                  <p className="text-gray-600">
                    Specifications: 1MHz processor, 4KB RAM. Pricing strategy:
                    $666.66 with 33% markup. Production cost optimization
                    through manual assembly.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">
                    Product Evolution: Apple II (1977)
                  </h3>
                  <p className="text-gray-600">
                    Market expansion through integrated design. Pricing power:
                    $1,298-$2,638 range. First-year revenue: $770,000 growing to
                    $7.9M in 1978.
                  </p>
                </div>
              </div>
            </section>

            {/* Leadership Analysis */}
            <section aria-labelledby="leadership-analysis" className="mb-16">
              <h2
                id="leadership-analysis"
                className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4"
              >
                Jobs-Wozniak Partnership: Leadership Dynamics
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">
                    Technical Innovation (Wozniak)
                  </h3>
                  <p className="text-gray-600">
                    Engineering breakthroughs: Reduced chip count by 50% vs
                    competitors. User-focused design: Built-in keyboard support
                    and video output.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">
                    Business Vision (Jobs)
                  </h3>
                  <p className="text-gray-600">
                    Brand positioning: "Computer for the masses". Distribution
                    strategy: Partnering with Byte Shop retailers. Investor
                    relations: Securing $250k from Mike Markkula.
                  </p>
                </div>
              </div>
            </section>

            {/* Long-term Impact */}
            <section
              aria-labelledby="business-impact"
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <h2
                id="business-impact"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Strategic Outcomes & Industry Impact
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">
                    Market Transformation
                  </h3>
                  <p className="text-gray-600">
                    Created personal computing market segment. 1977-1983 CAGR:
                    40% revenue growth. Established Silicon Valley startup
                    model.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">
                    Leadership Legacy
                  </h3>
                  <p className="text-gray-600">
                    Jobs&#39; product philosophy: "It's not just what it looks
                    like, but how it works". Wozniak&#39;s engineering
                    principles: "Simplify and perfect".
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Questions Addressed
              </h2>
              <dl className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <dt className="font-semibold text-lg text-gray-900">
                    What was Apple's initial market entry strategy?
                  </dt>
                  <dd className="mt-2 text-gray-600">
                    Targeted hobbyist community with affordable, modifiable
                    computers while establishing premium brand positioning.
                  </dd>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <dt className="font-semibold text-lg text-gray-900">
                    How did leadership roles evolve in the early days?
                  </dt>
                  <dd className="mt-2 text-gray-600">
                    Jobs focused on business strategy and marketing, while
                    Wozniak led technical development, creating complementary
                    leadership model.
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </article>
      </main>
    </>
  );
};

export default AppleCaseStudy;
