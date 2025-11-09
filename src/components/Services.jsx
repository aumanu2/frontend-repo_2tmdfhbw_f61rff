import React from 'react';
import { Code2, Palette, Zap, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    desc: 'Robust, maintainable, and accessible code with React, TypeScript, and modern tooling.',
    href: '#contact',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    desc: 'Cohesive UI kits, tokens, and documentation that scale across products and teams.',
    href: '#work',
  },
  {
    icon: Smartphone,
    title: 'Responsive Experiences',
    desc: 'Mobile-first layouts, micro-interactions, and motion that feel delightful everywhere.',
    href: '#work',
  },
  {
    icon: Zap,
    title: 'Performance & SEO',
    desc: 'Lighthouse-optimized builds, semantic HTML, and best-practice architecture.',
    href: '#contact',
  },
];

export default function Services() {
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="relative w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Capabilities</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">What I Do</h2>
          </div>
          <p className="max-w-xl text-white/70">
            From brand-aligned visuals to production-ready code. I partner with founders and teams to ship fast without
            compromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, href }) => (
            <a
              key={title}
              href={href}
              onClick={handleScroll(href.replace('#', ''))}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <span className="mt-4 inline-block text-xs text-white/60">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
