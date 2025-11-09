import React from 'react';

const projects = [
  {
    title: 'Fintech Dashboard',
    desc: 'Design system + responsive dashboard for a high‑growth fintech startup.',
    tags: ['Design System', 'React', 'Charts'],
    image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjI2ODMwMDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: 'https://example.com/fintech',
  },
  {
    title: 'SaaS Marketing Site',
    desc: 'Conversion‑focused website with A/B tested hero and optimized performance.',
    tags: ['Next.js', 'SEO', 'A/B Testing'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    link: 'https://example.com/saas',
  },
  {
    title: 'E‑commerce Experience',
    desc: 'High‑fidelity product pages with motion and blazing fast checkout flows.',
    tags: ['UX', 'Animations', 'Headless Commerce'],
    image: 'https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFJUUyJTgwJTkxY29tbWVyY2UlMjBFeHBlcmllbmNlfGVufDB8MHx8fDE3NjI2ODMwMDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: 'https://example.com/commerce',
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Selected Work</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Case Studies</h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            className="hidden rounded-md border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white/40 md:block"
          >
            Request full portfolio
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                <span className="mt-3 inline-block text-xs text-white/60">Open project →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
