import "./index.css";

const App = () => {
  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/manh.thang.338636",
      icon: "/facebook.svg",
      label: "/VuManhThang",
    },
    {
      name: "GitHub",
      href: "https://github.com/thang-dz/",
      icon: "/github.svg",
      label: "/VuManhThang",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/thang-vu-321b23276/",
      icon: "/linkedin.svg",
      label: "/VuManhThang",
    },
  ];
  const skills = [
    { name: "Reactjs", icon: "/react.svg" },
    { name: "HTML/CSS", icon: "/html.svg" },
    { name: "Nodejs", icon: "/nodejs.svg" },
  ];
  const projects = [
    {
      name: "Words To Images",
      des: "A simple tool to satisfy your passion for creating comics, transforming written stories into comics",
      skill: "React",
      color: "bg-blue-600",
      herf: "https://github.com/thang-dz/wordToImage",
    },
    {
      name: "Words To Images",
      des: "A simple tool to satisfy your passion for creating comics, transforming written stories into comics",
      skill: "React",
      color: "bg-blue-600",
      herf: "https://github.com/thang-dz/wordToImage",
    },
    {
      name: "Words To Images",
      des: "A simple tool to satisfy your passion for creating comics, transforming written stories into comics",
      skill: "React",
      color: "bg-blue-600",
      herf: "https://github.com/thang-dz/wordToImage",
    },
    {
      name: "Words To Images",
      des: "A simple tool to satisfy your passion for creating comics, transforming written stories into comics",
      skill: "React",
      color: "bg-blue-600",
      herf: "https://github.com/thang-dz/wordToImage",
    },
  ];
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full  max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="sm:sticky sm:top-6">
            <aside className="sm:col-span-1">
              <div className="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm">
                <div className="p-6 pt-6">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex flex-row md:flex-col items-center sm:items-start w-full gap-4">
                      <img
                        src="/user.png"
                        className="rounded-full size-12 sm:size-70 aspect-square object-cover border-2 border-gray-200"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <div className="flex items-center md:mt-4">
                          <h1 className="font-bold text-xl md:text-2xl">
                            Vũ Mạnh Thắng
                          </h1>
                          <div>
                            <img src="/vector.svg" />
                          </div>
                        </div>
                        <h2 className="text-sm md:text-base text-neutral-500">
                          Intern Fullstack
                        </h2>
                      </div>
                    </div>
                    <p className="mt-2 text-start text-sm text-neutral-500 italic">
                      "My passion is sleeping soundly"
                    </p>
                    <a
                      target="_blank"
                      className="font-semibold mt-4 w-full"
                      href="https://calendly.com/vumanhthang711/30min"
                    >
                      <button className="cursor-pointer group relative rounded-full bg-gradient-to-r from-blue-300/30 via-blue-500/30 via-40% to-purple-500/30 p-1 text-white transition-transform hover:scale-110 active:scale-105 w-full">
                        <div className="font-semibold">CONTACT ME</div>
                      </button>
                    </a>
                    <div className="mt-4 flex flex-col space-y-2 border-t border-neutral-500 pt-4 w-full">
                      {socials.map((social, index) => (
                        <a
                          key={index}
                          target="_blank"
                          href={social.href}
                          className="cursor-pointer flex items-center gap-2 group"
                        >
                          <img className="size-4" src={social.icon} />
                          <p className="text-sm text-neutral-500 group-hover:text-black transition-colors duration-200 ease-linear">
                            {social.label}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm mt-6">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight">
                    <h3>Skills</h3>
                  </div>
                  <div className="p-6 pl-0">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="inline-flex items-center gap-2 rounded-full bg-neutral-200/70 px-3  py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-300/70 transition"
                        >
                          <img src={skill.icon} className="size-4" />
                          <h4>{skill.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <main className="md:col-span-2 overflow-x-hidden">
            <div className="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm mb-6">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  <h3>About Me</h3>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-neutral-500">
                  <div className="relative font-mono whitespace-pre-line">
                    <div className="invisible">
                      "I am currently a Fullstack Intern, with my main
                      responsibilities focused on basic Frontend development.
                      Although my current tasks involve simple features, I see
                      this as an important foundation for understanding how a
                      web application works from the user interface to the
                      overall user experience. Driven by a strong passion for
                      technology, I aim to gradually expand my skills into
                      Backend development and system design, with the goal of
                      becoming a well-rounded Fullstack Developer in the
                      future!"
                    </div>
                    <div className="absolute inset-0 h-full w-full">
                      "I am currently a Fullstack Intern, with my main
                      responsibilities focused on basic Frontend development.
                      Although my current tasks involve simple features, I see
                      this as an important foundation for understanding how a
                      web application works from the user interface to the
                      overall user experience. Driven by a strong passion for
                      technology, I aim to gradually expand my skills into
                      Backend development and system design, with the goal of
                      becoming a well-rounded Fullstack Developer in the
                      future!"
                      <span className="opacity-0"> |</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm relative"
                >
                  <div></div>
                  <div className="p-6 pt-6 h-full">
                    <div className="flex flex-col h-full">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline"
                        href={project.herf}
                      >
                        {project.name}
                      </a>
                      <p className="text-sm text-neutral-500 mt-1 mb-4">
                        {project.des}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`size-4 rounded-full ${project.color}`}
                          ></div>
                          <span className="text-xs font-medium text-muted-foreground">
                            {project.skill}
                          </span>
                        </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                          href={project.herf}
                        >
                          View Project
                          <img src="a-l.svg" className="size-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm mb-6">
              <div className="p-6 pt-6">
                <ul className="space-y-8">
                  <li className="border-b last:border-b-0 pb-8 last:pb-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-[2.5rem] h-[2.5rem] rounded-md border border-neutral-200 shadow-md overflow-hidden flex justify-center items-center">
                        <img src="logo.png" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Intern FullStack</h4>
                        <h4 className="text-sm border-neutral-500">
                          {" "}
                          Fabbi Software
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-2 flex items-center">
                      <img src="calen.svg" className="size-3 mr-1" />
                      01/2026 - Present
                    </p>
                    <p className="text-sm mt-2">
                      Excited and enthusiastic upon joining the company
                    </p>
                    <div className="mt-4 flex space-x-2 overflow-x-auto pb-2 w-full">
                      <img src="/company.webp" className="size-30 rounded-lg" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Awards</h3>
            <div className="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm">
              <div className="p-6 pt-6">
                <ul className="space-y-8">
                  <li className="border-b last:border-b-0 pb-8 last:pb-0">
                    <p className="text-sm mt-2">Maybe in the beautiful day!</p>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
