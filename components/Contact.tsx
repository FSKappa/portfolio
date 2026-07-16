const EMAIL = "fskappa.dev@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/francisco-santos-173246114/";
const GITHUB_URL = "https://github.com/FSKappa";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Have a project in mind or just want to talk shop? Reach out.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center border border-zinc-900 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            {EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
