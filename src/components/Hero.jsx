import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden bg-black text-white" aria-label="Hero">
      {/* Background: premium gradient + animated blobs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_400px_at_80%_40%,rgba(236,72,153,0.2),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.35), transparent 60%)' }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -right-24 h-[36rem] w-[36rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at 70% 70%, rgba(236,72,153,0.3), transparent 60%)' }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-36">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Booking new work for Q4
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Elevating brands with code and design
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          I craft conversion‑focused websites and design systems—unifying aesthetics with performance and accessibility.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#work"
            onClick={handleScroll('work')}
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View Work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            onClick={handleScroll('contact')}
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:border-white/40"
          >
            Let’s Talk
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-3 items-center gap-6 opacity-80 sm:gap-10">
          <div className="text-left">
            <p className="text-2xl font-semibold">120+ </p>
            <p className="text-xs text-white/60">Screens shipped</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold">95</p>
            <p className="text-xs text-white/60">Lighthouse score</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold">30+</p>
            <p className="text-xs text-white/60">Happy partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
