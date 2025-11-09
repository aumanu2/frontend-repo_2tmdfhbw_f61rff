import React, { useState } from 'react';
import { Mail, Calendar, Check } from 'lucide-react';

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@example.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="contact" className="relative w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-white/50">Get in touch</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Let’s build something exceptional</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Have a product to launch, a site to redesign, or a design system to ship? I take on a limited number of
          projects each quarter to keep quality high.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a
            href="https://cal.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40"
          >
            <Calendar className="h-4 w-4" /> Book a call
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-300 transition hover:border-emerald-500/50 hover:bg-emerald-500/20"
          >
            {copied ? <Check className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
            {copied ? 'Email copied!' : 'Copy email'}
          </button>
        </div>

        <div className="mt-10 text-sm text-white/60">
          Prefer quick contact? <a href="#services" onClick={handleScroll('services')} className="underline underline-offset-4 hover:text-white">See services</a>
        </div>
      </div>
    </section>
  );
}
