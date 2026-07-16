const projects = [
  {
    title: "Vehicle service tracking platform",
    stack: "Next.js · Supabase",
    description:
      "A platform for tracking vehicle maintenance and service history, with a Next.js front end and a Supabase backend for auth, data storage and real-time updates.",
  },
  {
    title: "Portuguese mortgage cost simulator",
    stack: "React",
    description:
      "A simulator that helps users estimate the real costs of a mortgage in Portugal, covering interest, fees and other associated expenses.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-zinc-200">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600">
          A selection of personal and freelance projects. Details coming soon.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col border border-zinc-200 p-6"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-indigo-600">
                {project.stack}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
