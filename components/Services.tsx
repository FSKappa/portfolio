const services = [
  {
    title: "Backend & APIs",
    description:
      "ASP.NET Core APIs, OData services, authentication and authorization, and integrations with third-party systems — built for reliability and long-term maintainability.",
  },
  {
    title: "AI-assisted development tooling",
    description:
      "Automation and internal tooling that use AI to speed up development workflows — from code generation helpers to streamlined review and testing processes — without cutting corners on quality.",
  },
  {
    title: "Web apps",
    description:
      "Full-stack web applications with Next.js, deployed on Vercel, backed by Supabase — from prototypes to production-ready tools.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-zinc-200">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Services
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Freelance work across backend systems, developer tooling, and
          full-stack web apps.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-zinc-200 p-6"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
