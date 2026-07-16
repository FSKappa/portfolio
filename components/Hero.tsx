import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="border-b border-zinc-200">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
            Software Engineer · Lisbon, Portugal
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Custom software development, accelerated with AI-assisted tooling.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            I build and maintain business-critical systems, with deep expertise in
            .NET / ASP.NET Core backends — and I bring AI-assisted development
            workflows into the mix to ship reliable software faster.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-zinc-900 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
            >
              View projects
            </a>
          </div>
        </div>
        <div className="w-48 shrink-0 border border-zinc-200 sm:w-56 lg:w-64">
          <Image
            src="/francisco-santos.jpg"
            alt="Francisco Santos"
            width={768}
            height={980}
            priority
            className="aspect-[3/4] w-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
