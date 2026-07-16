export default function About() {
  return (
    <section id="about" className="border-b border-zinc-200">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          About me
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-zinc-600 leading-relaxed">
          <p>
            I&apos;m a software engineer based in Lisbon, Portugal, with close to
            a decade of experience building and maintaining business-critical
            systems. Online, I go by{" "}
            <span className="font-medium text-zinc-900">Fskappa</span>.
            Currently at Unit4, I work on .NET APIs for procurement
            software — maintaining existing features, shipping new ones, and
            keeping things reliable with automated testing (SpecFlow) and
            Azure DevOps pipelines.
          </p>
          <p>
            Before that, I spent over five years at Quidgest developing and
            maintaining financial management and public accounting software,
            and worked with Sitecore and .NET on web/CMS projects at Merkle
            DACH. Earlier in my career I also worked on mobile development
            with Xamarin.
          </p>
          <p>
            I care about writing solid, maintainable backend code, and
            I&apos;ve recently been exploring how AI-assisted tooling can
            speed up development workflows without cutting corners on
            quality.
          </p>
          <p>
            Outside my day-to-day role, I take on freelance projects — from
            backend APIs and integrations to small full-stack apps built with
            Next.js, Vercel and Supabase.
          </p>
        </div>
      </div>
    </section>
  );
}
