import "@/index.css";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import JsonLd from "@/components/JsonLd";
import ProjectsSection from "@/components/ProjectsSection";
import Sidebar from "@/components/Sidebar";
import WorkExperienceSection from "@/components/WorkExperience";
import {
  aboutText,
  projects,
  seo,
  skills,
  socials,
  workExperiences,
} from "@/configurations";

const App = () => {
  const formattedAboutText = aboutText.replace(/\. /g, ".\n\n");
  const imageUrl = new URL(seo.imagePath, seo.siteUrl).toString();
  const pageId = `${seo.siteUrl}#webpage`;
  const profilePageId = `${seo.siteUrl}#profile`;
  const websiteId = `${seo.siteUrl}#website`;
  const personId = `${seo.siteUrl}#person`;
  const projectsId = `${seo.siteUrl}#projects`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: seo.siteName,
        url: seo.siteUrl,
        inLanguage: seo.language,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: seo.personName,
        jobTitle: seo.jobTitle,
        description: seo.description,
        image: imageUrl,
        url: seo.siteUrl,
        sameAs: socials.map((social) => social.href),
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: seo.siteUrl,
        name: seo.pageTitle,
        description: seo.description,
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": personId,
        },
        inLanguage: seo.language,
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: seo.siteUrl,
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
          "@type": "CreativeWork",
          position: index + 1,
          name: p.name,
          description: p.des,
          url: p.herf,
          creator: {
            "@id": personId,
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
