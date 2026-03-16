export interface Project {
  id: number;
  name: string;
  des: string;
  skill: string;
  color: string;
  href: string;
  icon: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <>
      <h3 className="mb-4 text-xl font-bold">Featured Projects</h3>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full max-w-sm animate-rotate-border rounded-lg bg-[conic-gradient(from_var(--border-angle),transparent_0deg,#ef4444_40deg,#a855f7_60deg,#3b82f6_80deg,transparent_100deg)] p-[2px] transition-all duration-800 ease-out"
          >
            <div className="relative rounded-lg bg-white text-neutral-950 shadow-sm">
              <div className="h-full p-6 pt-6">
                <div className="flex h-full flex-col">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                    href={project.href}
                  >
                    {project.name}
                  </a>
                  <p className="mt-1 mb-4 text-sm text-neutral-500">
                    {project.des}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`size-4 rounded-full ${project.color}`}
                      ></div>
                      <span className="text-muted-foreground text-xs font-medium">
                        {project.skill}
                      </span>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary flex items-center gap-2 text-sm hover:underline"
                      href={project.href}
                    >
                      View Project
                      <img
                        src={project.icon}
                        alt="project"
                        className="size-3"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
