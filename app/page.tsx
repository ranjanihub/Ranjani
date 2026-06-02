'use client';

import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Search,
  Code2,
  MonitorSmartphone,
  BrainCircuit,
  ChevronRight,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

/* ─── DATA ──────────────────────────────────────────────────────── */

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Web Development',
    desc: 'Modern, responsive websites built with Next.js & React that are fast, SEO-ready, and beautifully designed.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'On-page & off-page SEO strategies that improve organic visibility, drive traffic, and generate real leads.',
  },
  {
    icon: Code2,
    title: 'Full Stack Dev',
    desc: 'End-to-end apps using Python, Supabase, and PostgreSQL for robust, scalable solutions.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    desc: 'AI-powered chatbots and tools using Groq LLM & RAG architecture for intelligent customer interactions.',
  },
];

const skills = [
  'Next.js', 'React.js', 'TypeScript', 'Python',
  'Supabase', 'PostgreSQL', 'Firebase', 'Figma',
  'SEO', 'On-Page SEO', 'N8N', 'Git',
];

const experience = [
  {
    role: 'SEO Intern',
    company: 'Nettyfish Solutions Pvt. Ltd.',
    period: 'Apr 2026 – Present',
    points: [
      'On-Page & Off-Page SEO to boost visibility and lead generation.',
      'Built Wacto AI Chatbot using Groq LLM & RAG architecture.',
      'Developed Phone Number Filtering App using Streamlit.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Hexpertify',
    period: 'Sep 2025 – Dec 2025',
    points: [
      'Designed UI for live website using Figma in team environment.',
      'Applied SEO meta-tag optimisation on the MoodLift project.',
    ],
  },
];

const projects = [
  {
    name: 'MoodLift',
    subtitle: 'Mental Health Tracking Platform',
    stack: ['Next.js', 'Supabase'],
    url: 'moodlift.hexpertify.com',
    href: 'https://moodlift.hexpertify.com',
    desc: 'Full stack mood tracking platform with wellness activities. Integrated Supabase for data storage and SEO tags for search visibility.',
    img: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'SkillSwap',
    subtitle: 'Microlearning Skill Exchange Platform',
    stack: ['Next.js', 'Supabase'],
    url: 'skill-swap-zeta-seven.vercel.app',
    href: 'https://skill-swap-zeta-seven.vercel.app',
    desc: 'Peer-to-peer skill exchange platform with a matching system connecting users based on their teaching and learning interests.',
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

/* ─── NAVBAR ─────────────────────────────────────────────────── */

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4"
      style={{ background: 'rgba(232,232,224,0.88)', backdropFilter: 'blur(14px)' }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#f5b800] flex items-center justify-center">
          <span className="font-display text-black text-xs font-bold">R</span>
        </div>
        <span className="font-display text-black text-lg tracking-tight">RANJANI</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['About', 'Services', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link font-body text-sm font-semibold text-[#1a1a1a] hover:text-[#f5b800] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 bg-[#1a1a1a] text-[#f5b800] font-body font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#f5b800] hover:text-black transition-all duration-200"
      >
        Hire Me <ArrowRight size={14} />
      </a>
    </nav>
  );
}

/* ─── HERO SECTION ───────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: '#e8e8e0', paddingTop: '80px' }}
    >
      {/* Vertical side label */}
      <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <span className="vertical-text font-body text-xs font-bold tracking-[0.35em] text-black/25">
          RANJANI — 2026
        </span>
      </div>

      {/* Section number watermark */}
      <div className="section-num" style={{ bottom: '-2rem', left: '-1rem' }}>01</div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center px-8 md:px-16 pt-8 pb-8 gap-8 lg:gap-16">
        {/* Left: text */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Quote + pill */}
          <div className="flex items-center gap-4">
            <span className="font-display text-[#f5b800] text-7xl leading-none select-none">"</span>
            <span className="pill-tag text-sm">Website &amp; SEO</span>
          </div>

          {/* Big title */}
          <div className="relative">
            <h1
              className="font-display text-black leading-[0.88] select-none"
              style={{ fontSize: 'clamp(5rem, 13vw, 10rem)' }}
            >
              PORTO
              <br />
              FOLIO<span className="text-[#f5b800]">.</span>
            </h1>

            {/* Floating deco icons */}
            <div
              className="deco-circle absolute"
              style={{ width: 50, height: 50, top: '8%', right: '28%', borderColor: 'rgba(0,0,0,0.18)' }}
            >
              <Globe size={20} strokeWidth={1.4} color="rgba(0,0,0,0.28)" />
            </div>
            <div
              className="deco-circle absolute"
              style={{ width: 42, height: 42, bottom: '12%', left: '52%', borderColor: 'rgba(0,0,0,0.18)' }}
            >
              <Code2 size={17} strokeWidth={1.4} color="rgba(0,0,0,0.28)" />
            </div>
            <div
              className="deco-circle absolute"
              style={{ width: 36, height: 36, top: '50%', right: '12%', borderColor: 'rgba(245,184,0,0.5)' }}
            >
              <Search size={14} strokeWidth={1.4} color="rgba(245,184,0,0.7)" />
            </div>
          </div>

          {/* Name row */}
          <div className="flex items-center gap-3 mt-2">
            <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <ChevronRight size={14} color="#f5b800" />
            </div>
            <span className="font-body font-bold text-lg text-[#1a1a1a]">B. Ranjani</span>
          </div>

          {/* Tagline */}
          <p className="font-body text-sm text-black/55 max-w-sm leading-relaxed">
            Full Stack Developer &amp; SEO Specialist crafting high-performance websites that rank and convert.
          </p>

          {/* Selected best — bottom right on desktop */}
          <div className="text-right hidden lg:block">
            <p className="font-body text-xs font-semibold text-black/45 italic leading-relaxed">
              Selected Best<br />
              Website Building Until 2026
            </p>
          </div>
        </div>

        {/* Right: photo + stats */}
        <div className="relative flex flex-col items-center gap-6">
          {/* Photo with yellow offset shadow */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-[#f5b800] z-0" />
            <div
              className="relative z-10 rounded-3xl overflow-hidden shadow-xl"
              style={{ width: 270, height: 330 }}
            >
              <img
                src="/Scr/Ranjani Bw Img.png"
                alt="B. Ranjani"
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>
            {/* Circle accent */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full border-4 border-[#f5b800] z-20" />
          </div>

          {/* Stat chips */}
          <div className="flex gap-3 mt-4">
            <div className="bg-[#1a1a1a] rounded-2xl px-4 py-3 text-center">
              <p className="font-display text-[#f5b800] text-xl">2+</p>
              <p className="font-body text-[10px] text-white/60 mt-0.5">Yrs Exp</p>
            </div>
            <div className="bg-[#f5b800] rounded-2xl px-4 py-3 text-center">
              <p className="font-display text-black text-xl">10+</p>
              <p className="font-body text-[10px] text-black/60 mt-0.5">Projects</p>
            </div>
            <div className="bg-white rounded-2xl px-4 py-3 text-center shadow-sm">
              <p className="font-display text-xl">SEO</p>
              <p className="font-body text-[10px] text-black/45 mt-0.5">Expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-5 h-9 border-2 border-black/25 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#f5b800] rounded-full" />
          </div>
          <span className="font-body text-[10px] text-black/35">scroll</span>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT SECTION ──────────────────────────────────────────── */

function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-8 md:px-16"
      style={{ background: '#efefea' }}
    >
      {/* Vertical side label */}
      <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <span className="vertical-text font-body text-xs font-bold tracking-[0.35em] text-black/20">
          RANJANI — 2026
        </span>
      </div>

      {/* Section number watermark */}
      <div className="section-num" style={{ bottom: '-4rem', left: '-2rem' }}>02</div>

      {/* Header row */}
      <div className="flex items-center gap-4 mb-12 relative z-10">
        <span className="font-body font-bold text-lg text-[#1a1a1a]">About</span>
        <div className="flex-1 h-px bg-black/12" />
        <div className="w-8 h-8 rounded-full border-2 border-black/18 flex items-center justify-center">
          <ChevronRight size={14} color="#1a1a1a" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-12">
        {/* Left column: photo + contact */}
        <div className="flex flex-col gap-6 items-start lg:w-64 flex-shrink-0">
          {/* Photo */}
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-[#f5b800] z-0" />
            <div
              className="relative z-10 rounded-2xl overflow-hidden border-4 border-white shadow-lg"
              style={{ width: 220, height: 260 }}
            >
              <img
                src="/Scr/Ranjani Bw Img.png"
                alt="B. Ranjani"
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-[#f5b800] rounded-2xl p-5 w-full shadow-md">
            <p className="font-body font-bold text-sm text-black mb-4">Let&apos;s Work Together :</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: Mail, text: 'ranjaniranjani5694@gmail.com', href: 'mailto:ranjaniranjani5694@gmail.com' },
                { icon: Phone, text: '+91 7358724578', href: 'tel:+917358724578' },
                { icon: Linkedin, text: 'linkedin.com/in/ranjani8', href: 'https://www.linkedin.com/in/ranjani8' },
                { icon: Github, text: 'github.com/ranjanihub', href: 'https://github.com/ranjanihub' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:opacity-70 transition-opacity"
                >
                  <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={11} color="#1a1a1a" />
                  </div>
                  <span className="font-body text-[11px] font-medium text-black break-all leading-tight">{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: bio + edu + exp + skills */}
        <div className="flex-1 flex flex-col gap-8 min-w-0">
          {/* Hello */}
          <div className="flex items-start gap-3">
            <span className="font-display text-[#f5b800] text-5xl leading-none mt-1 select-none">"</span>
            <h2 className="font-display text-black" style={{ fontSize: 'clamp(2.5rem,6vw,4rem)' }}>
              HELLO<span className="text-[#f5b800]">.</span>
            </h2>
          </div>

          {/* Bio */}
          <p className="font-body text-sm text-black/70 leading-relaxed max-w-xl -mt-2">
            I&apos;m <strong>B. Ranjani</strong>, a Full Stack Developer and SEO Specialist pursuing
            B.Tech in Artificial Intelligence &amp; Data Science at DMI College of Engineering, Chennai (CGPA 8.6).
            I build fast, modern websites and craft SEO strategies that drive real organic traffic and conversions.
          </p>
          <p className="font-body text-sm text-black/70 leading-relaxed max-w-xl -mt-4">
            I also build AI-powered tools using Groq LLM and RAG architecture. For me, great web work
            is where beautiful design meets technical precision and searchability.
          </p>

          {/* Education + Skills */}
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Education */}
            <div className="flex-1">
              <h3 className="font-body font-bold text-sm text-[#1a1a1a] mb-3 underline underline-offset-4 decoration-[#f5b800] decoration-2">
                Education
              </h3>
              <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1 pt-1.5 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f5b800]" />
                  <div className="w-px flex-1 bg-black/12" />
                </div>
                <div>
                  <p className="font-display text-3xl text-black/12 leading-none">2026</p>
                  <p className="font-body font-bold text-sm text-[#1a1a1a] mt-1 leading-tight">
                    AI &amp; Data Science
                  </p>
                  <p className="font-body text-xs text-black/50 mt-0.5">
                    DMI College of Engineering, Chennai
                  </p>
                  <span className="inline-block font-body text-xs text-black font-bold bg-[#f5b800] px-2 py-0.5 rounded-full mt-2">
                    CGPA: 8.6
                  </span>
                </div>
              </div>
            </div>

            {/* Tech Skills */}
            <div className="flex-1">
              <h3 className="font-body font-bold text-sm text-[#1a1a1a] mb-3 underline underline-offset-4 decoration-[#f5b800] decoration-2">
                Tech Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Working Experience */}
          <div>
            <h3 className="font-body font-bold text-sm text-[#1a1a1a] mb-4 underline underline-offset-4 decoration-[#f5b800] decoration-2">
              Working Experience
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {experience.map((exp) => (
                <div
                  key={exp.role}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 hover:border-[#f5b800]/40 transition-colors"
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div className="min-w-0">
                      <p className="font-body font-bold text-sm text-[#1a1a1a] leading-tight">{exp.role}</p>
                      <p className="font-body text-xs text-black/50 mt-0.5 leading-tight">{exp.company}</p>
                    </div>
                    <span className="font-body text-[10px] bg-[#f5b800]/15 text-black/55 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 mt-0.5">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 mt-2.5">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="font-body text-xs text-black/60 flex gap-1.5 leading-relaxed">
                        <span className="text-[#f5b800] font-bold flex-shrink-0">•</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES / TABLE OF CONTENT ────────────────────────────── */

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 px-8 md:px-16"
      style={{ background: '#e8e8e0' }}
    >
      {/* Vertical side label */}
      <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <span className="vertical-text font-body text-xs font-bold tracking-[0.35em] text-black/20">
          RANJANI — 2026
        </span>
      </div>

      {/* Section number watermark */}
      <div className="section-num" style={{ bottom: '-4rem', left: '-2rem' }}>03</div>

      {/* Header row */}
      <div className="flex items-center gap-4 mb-16 relative z-10">
        <span className="font-body font-bold text-lg text-[#1a1a1a]">Table Of Content</span>
        <div className="flex-1 h-px bg-black/12" />
        <div className="w-8 h-8 rounded-full border-2 border-black/18 flex items-center justify-center">
          <ChevronRight size={14} color="#1a1a1a" />
        </div>
      </div>

      {/* Big heading */}
      <div className="relative z-10 mb-14 overflow-hidden">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-display text-[#f5b800] text-6xl leading-none select-none">"</span>
          <span className="font-display text-[#f5b800] text-6xl leading-none select-none">"</span>
        </div>
        <h2
          className="font-display text-black leading-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          TABLE <span className="text-[#f5b800]">OF</span> CONTENT
          <span className="text-[#f5b800]">.</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-5">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="service-card bg-[#f5b800] rounded-3xl p-6 flex flex-col items-center text-center gap-4 shadow-md cursor-default"
          >
            <div className="w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center">
              <Icon size={32} strokeWidth={1.4} color="#1a1a1a" />
            </div>
            <div>
              <p className="font-body font-bold text-sm text-[#1a1a1a] mb-2 leading-tight">{title}</p>
              <p className="font-body text-xs text-black/65 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── PROJECTS SECTION ───────────────────────────────────────── */

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 px-8 md:px-16"
      style={{ background: '#efefea' }}
    >
      {/* Vertical side label */}
      <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <span className="vertical-text font-body text-xs font-bold tracking-[0.35em] text-black/20">
          RANJANI — 2026
        </span>
      </div>

      {/* Section number watermark */}
      <div className="section-num" style={{ bottom: '-4rem', left: '-2rem' }}>04</div>

      {/* Header row */}
      <div className="flex items-center gap-4 mb-12 relative z-10">
        <span className="font-body font-bold text-lg text-[#1a1a1a]">Projects</span>
        <div className="flex-1 h-px bg-black/12" />
        <div className="w-8 h-8 rounded-full border-2 border-black/18 flex items-center justify-center">
          <ChevronRight size={14} color="#1a1a1a" />
        </div>
      </div>

      {/* Big heading */}
      <div className="relative z-10 mb-12">
        <span className="font-display text-[#f5b800] text-5xl leading-none select-none">"</span>
        <h2
          className="font-display text-black leading-none mt-2"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          FEATURED
          <br />
          WORK<span className="text-[#f5b800]">.</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="project-card bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={proj.img}
                alt={proj.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute top-4 right-4">
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f5b800] flex items-center justify-center hover:bg-black transition-colors"
                >
                  <ExternalLink size={14} color="#1a1a1a" />
                </a>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {proj.stack.map((s) => (
                  <span key={s} className="font-body text-xs bg-[#f5b800] text-black px-3 py-1 rounded-full font-bold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl text-black leading-tight">{proj.name}</h3>
                  <p className="font-body text-xs text-black/45 mt-0.5">{proj.subtitle}</p>
                </div>
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-[#f5b800] font-bold hover:underline whitespace-nowrap flex-shrink-0"
                >
                  {proj.url}
                </a>
              </div>
              <p className="font-body text-sm text-black/60 leading-relaxed">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CONTACT SECTION ────────────────────────────────────────── */

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-8 md:px-16"
      style={{ background: '#1a1a1a' }}
    >
      {/* Section number watermark */}
      <div
        className="section-num"
        style={{ bottom: '-4rem', left: '-2rem', color: 'rgba(255,255,255,0.04)' }}
      >
        05
      </div>

      {/* Vertical side label */}
      <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <span className="vertical-text font-body text-xs font-bold tracking-[0.35em] text-white/18">
          RANJANI — 2026
        </span>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start gap-16">
        {/* Left */}
        <div className="flex-1">
          <span className="font-display text-[#f5b800] text-5xl leading-none select-none">"</span>
          <h2
            className="font-display text-white leading-none mt-2 mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            LET&apos;S
            <br />
            BUILD
            <br />
            TOGETHER<span className="text-[#f5b800]">.</span>
          </h2>
          <p className="font-body text-white/50 text-sm leading-relaxed max-w-sm">
            Ready to grow your online presence? Whether you need a stunning website, an SEO strategy
            that drives real traffic, or an AI-powered tool — let&apos;s make it happen.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            {[
              { num: '2+', label: 'Years Experience' },
              { num: '10+', label: 'Projects Delivered' },
              { num: '8.6', label: 'CGPA Score' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display text-[#f5b800] text-3xl">{num}</p>
                <p className="font-body text-white/35 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: contact links */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          {[
            { icon: Mail, label: 'Email', value: 'ranjaniranjani5694@gmail.com', href: 'mailto:ranjaniranjani5694@gmail.com' },
            { icon: Phone, label: 'Phone', value: '+91 7358724578', href: 'tel:+917358724578' },
            { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ranjani8', href: 'https://www.linkedin.com/in/ranjani8' },
            { icon: Github, label: 'GitHub', value: 'github.com/ranjanihub', href: 'https://github.com/ranjanihub' },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-[#f5b800]/10 border border-white/8 hover:border-[#f5b800]/40 rounded-2xl px-5 py-4 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#f5b800] flex items-center justify-center flex-shrink-0">
                <Icon size={16} color="#1a1a1a" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-xs text-white/35">{label}</p>
                <p className="font-body text-sm text-white font-semibold truncate">{value}</p>
              </div>
              <ArrowRight size={15} color="rgba(255,255,255,0.25)" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-white/25 text-xs">
          © 2026 B. Ranjani — Full Stack Developer &amp; SEO Specialist
        </p>
        <div className="flex items-center gap-6">
          {['About', 'Services', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-xs text-white/25 hover:text-[#f5b800] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────── */

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
