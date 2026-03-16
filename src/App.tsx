import "@/index.css";

import {
  aboutText,
  projects,
  seo,
  skills,
  socials,
  workExperiences,
} from "@/configurations";
import AboutSection from "./components/about-section";
import AwardsSection from "./components/awards-section";
import JsonLd from "./components/jsonld";
import ProjectsSection from "./components/projects-section";
import Sidebar from "./components/sidebar";
import WorkExperienceSection from "./components/work-experience";

const App = () => {
  const formattedAboutText = aboutText.replace(/\. /g, ".\n\n");
  const siteUrl = (
    (import.meta as ImportMeta & { env?: { VITE_SITE_URL?: string } }).env
      ?.VITE_SITE_URL ?? seo.siteUrl
  ).replace(/\/+$/, "");
  const imageUrl = new URL(seo.imagePath, siteUrl).toString();
  const pageId = `${siteUrl}#webpage`;
  const profilePageId = `${siteUrl}#profile`;
  const websiteId = `${siteUrl}#website`;
  const personId = `${siteUrl}#person`;
  const projectsId = `${siteUrl}#projects`;
  const imageId = `${siteUrl}#primaryimage`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        "@id": imageId,
        url: imageUrl,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: seo.siteName,
        url: siteUrl,
        inLanguage: seo.language,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: seo.personName,
        jobTitle: seo.jobTitle,
        description: seo.description,
        image: imageUrl,
        mainEntityOfPage: {
          "@id": profilePageId,
        },
        url: siteUrl,
        sameAs: socials.map((social) => social.href),
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: siteUrl,
        name: seo.pageTitle,
        description: seo.description,
        isPartOf: {
          "@id": websiteId,
        },
        mainEntity: {
          "@id": personId,
        },
        primaryImageOfPage: {
          "@id": imageId,
        },
        about: {
          "@id": personId,
        },
        inLanguage: seo.language,
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: siteUrl,
        name: `${seo.personName} Profile`,
        isPartOf: {
          "@id": websiteId,
        },
        mainEntity: {
          "@id": personId,
        },
        inLanguage: seo.language,
      },
      {
        "@type": "ItemList",
        "@id": projectsId,
        name: "Featured Projects",
        itemListElement: projects.map((p, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: p.name,
            description: p.des,
            url: p.href,
            creator: {
              "@id": personId,
            },
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}

      <JsonLd data={structuredData} />

      {/* Main */}
      <main>
        <div className="mx-auto w-full max-w-5xl px-4 py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Sidebar socials={socials} skills={skills} />

            <section
              className="overflow-x-hidden md:col-span-2"
              aria-label="Portfolio content"
            >
              <AboutSection text={formattedAboutText} />

              <ProjectsSection projects={projects} />

              <WorkExperienceSection items={workExperiences} />

              <AwardsSection />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
