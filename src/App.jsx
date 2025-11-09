import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import ContactCTA from './components/ContactCTA';
import { Github, Linkedin, Dribbble } from 'lucide-react';

function Navbar() {
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="text-sm font-semibold tracking-wide">Flames Studio</a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#services" onClick={handleScroll('services')} className="hover:text-white">Services</a>
          <a href="#work" onClick={handleScroll('work')} className="hover:text-white">Work</a>
          <a href="#contact" onClick={handleScroll('contact')} className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" onClick={handleScroll('contact')} className="rounded-md border border-white/20 px-3 py-1.5 text-xs text-white/80 hover:border-white/40">
          Enquire
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Flames Studio — All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white"><Dribbble className="h-4 w-4" /> Dribbble</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white"><Github className="h-4 w-4" /> GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WorkShowcase />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
