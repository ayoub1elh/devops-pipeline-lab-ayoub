
const pipelineStages = [
  {
    title: 'Commit and Push',
    description: 'A change lands on main and immediately triggers the workflow.',
    status: 'Auto trigger',
  },
  {
    title: 'Continuous Integration',
    description: 'GitHub Actions installs deps, runs lint, and builds the Vite app.',
    status: 'Quality gate',
  },
  {
    title: 'Continuous Deployment',
    description: 'Build artifacts are deployed to GitHub Pages with zero manual steps.',
    status: 'Live release',
  },
]

const quickCommands = [
  'pnpm install',
  'pnpm lint',
  'pnpm build',
  'git push origin main',
]

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-14 pt-10 md:px-10">
        <header className="mb-12 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm md:px-6">
          <p className="font-mono text-sm tracking-wide text-cyan-300">DEVOPS PIPELINE LAB</p>
          <span className="rounded-full border border-emerald-300/40 bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
            Deployment Ready
          </span>
        </header>

        <main className="space-y-10">
          <section className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="inline-flex w-fit rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                React + Tailwind + GitHub Actions + Pages
              </p>
              <h1 className="text-balance font-display text-4xl font-bold leading-tight text-white md:text-6xl">
                Ship every commit with a clean CI/CD pipeline.
              </h1>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg">
                This lab demonstrates automated linting, build validation, and zero-touch deployment.
                Once code is pushed, GitHub Actions handles quality checks and publishes the latest build.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/ayoub1elh/devops-pipeline-lab-ayoub/actions"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  View Actions
                </a>
                <a
                  href="https://ayoub1elh.github.io/devops-pipeline-lab-ayoub/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Open Live Site
                </a>
              </div>
            </div>

            <div className="animate-float-slow rounded-3xl border border-white/15 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.5)] backdrop-blur">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Pipeline Overview</p>
              <div className="space-y-4">
                {pipelineStages.map((stage, index) => (
                  <article
                    key={stage.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40"
                  >
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <h2 className="font-semibold text-white">{`${index + 1}. ${stage.title}`}</h2>
                      <span className="rounded-full border border-cyan-300/35 bg-cyan-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-cyan-200">
                        {stage.status}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">{stage.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">Quick Commands</p>
              <div className="space-y-3">
                {quickCommands.map((command) => (
                  <div
                    key={command}
                    className="rounded-xl border border-emerald-300/20 bg-emerald-400/5 px-4 py-3 font-mono text-sm text-emerald-100"
                  >
                    $ {command}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-amber-300">Demo Checklist</p>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">Create a commit and push to main.</li>
                <li className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">Watch CI pass in GitHub Actions.</li>
                <li className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">Verify latest build on GitHub Pages.</li>
                <li className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">Share the pipeline URL during the lab demo.</li>
              </ul>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
