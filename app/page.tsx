const skills = [
  {
    name: "HTML",
    detail: "Semantic markup, accessible structure, and clean document layout.",
  },
  {
    name: "CSS",
    detail: "Responsive layouts, visual polish, and consistent design systems.",
  },
  {
    name: "JS",
    detail: "Interactive interfaces, DOM logic, and practical client-side behavior.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-medium tracking-wide">
            Khawar Abbas
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <a href="#skills" className="hover:text-foreground">
              Skills
            </a>
            <a
              href="#hire"
              className="rounded-full bg-accent px-4 py-2 font-medium text-white hover:bg-accent-hover"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex flex-1 flex-col">
        <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24 sm:py-32">
          <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
            Front-end developer
          </p>
          <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-7xl">
            Khawar Abbas
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            I build clear, responsive websites with HTML, CSS, and JavaScript —
            focused on structure, usability, and a polished finish.
          </p>
          <div className="mt-10">
            <a
              href="#hire"
              className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-base font-medium text-white hover:bg-accent-hover"
            >
              Hire Me
            </a>
          </div>
        </section>

        <section
          id="skills"
          className="border-t border-border bg-card"
        >
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              Skills
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-3">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <p className="font-mono text-sm text-accent">{skill.name}</p>
                  <p className="mt-3 text-base leading-7 text-muted">
                    {skill.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="hire" className="border-t border-border">
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              Available for freelance projects and full-time roles. If you need
              a front-end developer who knows HTML, CSS, and JavaScript, get in
              touch.
            </p>
            <a
              href="#hire"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-accent px-7 text-base font-medium text-white hover:bg-accent-hover"
            >
              Hire Me
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl px-6 py-6 text-sm text-muted">
          <p>© {new Date().getFullYear()} Khawar Abbas</p>
        </div>
      </footer>
    </div>
  );
}
