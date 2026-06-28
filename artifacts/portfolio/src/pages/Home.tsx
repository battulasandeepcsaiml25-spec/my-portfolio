import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import {
  Mail,
  MapPin,
  Phone,
  Terminal,
  Code,
  Database,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
  ChevronDown,
  Shield,
  Palette,
  Star,
  ExternalLink,
  Menu,
  X,
  Globe,
  Layers,
  Cpu,
  Wrench,
  Users,
} from "lucide-react";

/* ─── Scroll-reveal wrapper ─────────────────────────────── */
const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Sticky navbar ─────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["About", "Education", "Skills", "Projects", "Certifications", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-sm font-black font-mono px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary tracking-widest neon-glow">
            BVS
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wide relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/battulasandeepcsaiml25-spec"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg glass-panel hover:bg-primary/10 hover:text-primary transition-all"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-battula-599418380"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg glass-panel hover:bg-primary/10 hover:text-primary transition-all"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-glass border-t border-white/5"
          >
            <ul className="px-6 py-4 space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── Floating tech badge ───────────────────────────────── */
function FloatingBadge({
  label,
  className,
  animClass,
}: {
  label: string;
  className: string;
  animClass: string;
}) {
  return (
    <div
      className={`absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/10 text-xs font-mono text-muted-foreground pointer-events-none select-none ${animClass} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      {label}
    </div>
  );
}

/* ─── Main component ────────────────────────────────────── */
export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* ── Global ambient blobs ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="blob absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full bg-primary/8 blur-[140px]" />
        <div className="blob absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/8 blur-[140px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* ════════════════════════════════════
            HERO
        ════════════════════════════════════ */}
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden">
          {/* Dot grid */}
          <div className="grid-bg absolute inset-0 opacity-40" />

          {/* Floating tech badges */}
          <FloatingBadge label="Python" className="top-[22%] left-[8%]" animClass="floating" />
          <FloatingBadge label="AI / ML" className="top-[32%] right-[7%]" animClass="floating-delay" />
          <FloatingBadge label="Azure AZ-900" className="bottom-[30%] left-[6%]" animClass="floating-delay2" />
          <FloatingBadge label="JavaScript" className="bottom-[28%] right-[8%]" animClass="floating-delay3" />
          <FloatingBadge label="Data Engineering" className="top-[15%] right-[18%]" animClass="floating-slow" />

          <motion.div
            style={{ y: heroY }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto relative"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/8 text-sm font-mono text-primary mb-8 neon-glow-box"
            >
              <Terminal className="w-4 h-4" />
              <span>System.out.println("Hello, World!");</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="text-5xl sm:text-7xl lg:text-[96px] font-black tracking-tight leading-[1.05] mb-4"
            >
              BATTULA VENKATA
              <br />
              <span className="text-gradient">SANDEEP</span>
              <span className="cursor-blink" />
            </motion.h1>

            {/* Sub-title */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-lg sm:text-2xl text-muted-foreground font-mono mb-10 tracking-wide"
            >
              AI/ML Engineer &amp; Software Developer
            </motion.h2>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/85 transition-all neon-glow-box hover:scale-105 active:scale-95"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass-panel border border-white/10 hover:border-primary/40 hover:text-primary transition-all"
              >
                Get In Touch
              </a>
              <div className="flex gap-3">
                <a
                  href="https://github.com/battulasandeepcsaiml25-spec"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full glass-panel hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
                >
                  <SiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sandeep-battula-599418380"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full glass-panel hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════
            ABOUT
        ════════════════════════════════════ */}
        <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-14 items-start">
              {/* Text */}
              <div>
                <p className="text-xs font-mono text-primary tracking-[0.25em] uppercase mb-3">01. About Me</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Driven to Build<br />the Future.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  An enthusiastic B.Tech CS (AI/ML) student with a strong foundation in programming,
                  mathematics, and problem-solving. Passionate about software development, data
                  analysis, and Artificial Intelligence — constantly seeking opportunities to apply
                  technical skills through real-world projects and internships.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
                  {[
                    { icon: MapPin, text: "Greater Noida, UP" },
                    { icon: Mail, text: "battulasandeep2321@gmail.com" },
                    { icon: Phone, text: "+91 7981951705" },
                    { icon: Globe, text: "EN · HI · TE · OD" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-muted-foreground glass-panel px-4 py-3 rounded-xl">
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="truncate">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2nd", label: "Year Student", color: "text-primary", glow: "hover-glow-cyan" },
                  { value: "4", label: "Projects Built", color: "text-secondary", glow: "hover-glow-purple" },
                  { value: "3", label: "Certifications", color: "text-accent", glow: "hover-glow-pink" },
                  { value: "4", label: "Languages Spoken", color: "text-primary", glow: "hover-glow-cyan" },
                ].map(({ value, label, color, glow }, i) => (
                  <Reveal key={label} delay={i * 0.1}>
                    <div
                      className={`glass-panel rounded-2xl p-7 flex flex-col items-center justify-center text-center border border-white/5 transition-all duration-300 hover:scale-105 cursor-default ${glow}`}
                    >
                      <span className={`text-5xl font-black ${color} neon-glow mb-2`}>{value}</span>
                      <span className="text-sm text-muted-foreground font-mono">{label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ════════════════════════════════════
            EDUCATION
        ════════════════════════════════════ */}
        <section id="education" className="py-28 px-6 max-w-6xl mx-auto">
          <Reveal>
            <p className="text-xs font-mono text-primary tracking-[0.25em] uppercase mb-3">02. Education</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-14">Academic Trajectory</h3>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cards */}
            <div className="space-y-6">
              {[
                {
                  title: "B.Tech CSE (AI/ML)",
                  sub: "GLA University · Greater Noida",
                  years: "2025 – 2029",
                  detail: "Pursuing undergraduate degree with specialization in Artificial Intelligence and Machine Learning.",
                  color: "border-l-primary",
                  textColor: "text-primary",
                  glow: "hover-glow-cyan",
                },
                {
                  title: "Class XII",
                  sub: "Board of Intermediate Education, AP",
                  years: "2025",
                  detail: "96.0%",
                  color: "border-l-secondary",
                  textColor: "text-secondary",
                  glow: "hover-glow-purple",
                },
                {
                  title: "Class X",
                  sub: "CBSE · Cuttack, Odisha",
                  years: "2023",
                  detail: "60.8%",
                  color: "border-l-muted-foreground",
                  textColor: "text-muted-foreground",
                  glow: "",
                },
              ].map((edu, i) => (
                <Reveal key={edu.title} delay={i * 0.1}>
                  <div
                    className={`glass-panel p-6 rounded-2xl border-l-4 ${edu.color} group transition-all duration-300 hover:scale-[1.02] ${edu.glow}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold">{edu.title}</h4>
                      <span className="text-xs font-mono text-muted-foreground">{edu.years}</span>
                    </div>
                    <p className={`text-sm font-mono mb-3 ${edu.textColor}`}>{edu.sub}</p>
                    <p className={`text-lg font-semibold ${edu.color.includes("muted") ? "text-muted-foreground" : ""}`}>
                      {edu.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CPI chart */}
            <Reveal delay={0.3}>
              <div className="glass-panel rounded-2xl p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <h4 className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="text-primary w-5 h-5" />
                    Performance Growth
                  </h4>
                  <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                    CPI Metrics
                  </span>
                </div>

                {/* Bars */}
                <div className="flex items-end justify-center gap-16 flex-1 min-h-[200px] relative">
                  {/* Sem 1 */}
                  <div className="relative flex flex-col items-center w-20">
                    <span className="absolute -top-8 text-xl font-bold text-muted-foreground">7.05</span>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "62%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full bg-gradient-to-t from-muted/30 to-muted-foreground/20 rounded-t-lg border border-white/5"
                    />
                    <span className="mt-3 text-xs font-mono text-muted-foreground">Sem 1</span>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="absolute bottom-[30%] left-1/2 -translate-x-1/2 text-primary"
                  >
                    <ArrowRight className="w-7 h-7" />
                  </motion.div>

                  {/* Sem 2 */}
                  <div className="relative flex flex-col items-center w-20">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.6 }}
                      className="absolute -top-14 flex flex-col items-center"
                    >
                      <span className="text-2xl font-black text-primary neon-glow">8.26</span>
                      <span className="text-xs font-mono bg-primary/15 text-primary px-2 py-0.5 rounded-full mt-1 border border-primary/30">
                        +1.21 CPI
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "88%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full bg-gradient-to-t from-secondary/30 via-primary/40 to-primary/60 rounded-t-lg border border-primary/40 neon-glow-box shimmer-bar"
                    />
                    <span className="mt-3 text-xs font-mono text-primary font-bold">Sem 2</span>
                  </div>
                </div>

                <p className="mt-8 text-center text-xs text-muted-foreground font-mono">
                  Demonstrating a strong upward trajectory in academic excellence.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════
            SKILLS
        ════════════════════════════════════ */}
        <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
          <Reveal>
            <p className="text-xs font-mono text-secondary tracking-[0.25em] uppercase mb-3 text-center">03. Arsenal</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-14 text-center">Technical Skills</h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Languages",
                icon: Cpu,
                color: "text-primary",
                border: "border-primary/20",
                bg: "bg-primary/8",
                glow: "hover-glow-cyan",
                pills: "bg-primary/10 text-primary",
                items: ["C", "Python", "Java", "JavaScript"],
              },
              {
                title: "Web Tech",
                icon: Layers,
                color: "text-secondary",
                border: "border-secondary/20",
                bg: "bg-secondary/8",
                glow: "hover-glow-purple",
                pills: "bg-secondary/10 text-secondary",
                items: ["HTML5", "CSS3", "Responsive UI", "UI/UX Design"],
              },
              {
                title: "Tools",
                icon: Wrench,
                color: "text-accent",
                border: "border-accent/20",
                bg: "bg-accent/8",
                glow: "hover-glow-pink",
                pills: "bg-accent/10 text-accent",
                items: ["VS Code", "GitHub", "Figma", "Office Suite"],
              },
              {
                title: "Soft Skills",
                icon: Users,
                color: "text-primary",
                border: "border-primary/20",
                bg: "bg-primary/8",
                glow: "hover-glow-cyan",
                pills: "bg-primary/10 text-primary",
                items: ["Problem Solving", "Communication", "Teamwork", "Time Mgmt"],
              },
            ].map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.1}>
                <div
                  className={`glass-panel rounded-2xl p-6 h-full border ${cat.border} transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 ${cat.glow}`}
                >
                  <div className={`inline-flex p-3 rounded-xl ${cat.bg} ${cat.color} mb-5`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-4">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className={`text-xs font-mono px-3 py-1 rounded-full ${cat.pills} border ${cat.border}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════
            PROJECTS
        ════════════════════════════════════ */}
        <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
          <Reveal>
            <p className="text-xs font-mono text-primary tracking-[0.25em] uppercase mb-3">04. Work</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-14">Featured Projects</h3>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Engineering Pipeline",
                desc: "Basic data processing pipeline built with Python. Implemented data cleaning and preprocessing techniques to prepare raw datasets for analysis.",
                tags: ["Python", "Data Processing", "Preprocessing"],
                featured: true,
                gradient: "from-primary/30 via-secondary/20 to-transparent",
                iconBg: "bg-primary/20",
                iconColor: "text-primary",
                Icon: Database,
              },
              {
                title: "Frontend Web Interface",
                desc: "Responsive website focused on modern UI/UX design principles and clean page structure, ensuring seamless compatibility across all devices.",
                tags: ["HTML", "CSS", "JavaScript", "Responsive"],
                featured: false,
                gradient: "from-secondary/30 via-accent/15 to-transparent",
                iconBg: "bg-secondary/20",
                iconColor: "text-secondary",
                Icon: Layers,
              },
              {
                title: "C Console Application",
                desc: "Terminal-based application applying core programming concepts including loops, functions, arrays, and robust file handling routines.",
                tags: ["C", "File Handling", "Algorithms"],
                featured: false,
                gradient: "from-accent/25 via-primary/10 to-transparent",
                iconBg: "bg-accent/20",
                iconColor: "text-accent",
                Icon: Terminal,
              },
              {
                title: "Python Mini Tools",
                desc: "Collection of beginner-friendly Python applications designed to strengthen problem-solving skills and algorithmic thinking through practical use-cases.",
                tags: ["Python", "Logic", "Scripting"],
                featured: false,
                gradient: "from-chart-4/25 via-primary/10 to-transparent",
                iconBg: "bg-chart-4/20",
                iconColor: "text-chart-4",
                Icon: Code,
              },
            ].map((project, i) => (
              <Reveal key={project.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`glass-panel rounded-2xl overflow-hidden h-full flex flex-col group border transition-all duration-300 ${
                    project.featured ? "border-primary/30 neon-glow-box" : "border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Banner */}
                  <div
                    className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className={`p-5 rounded-2xl ${project.iconBg} ${project.iconColor} relative z-10`}>
                      <project.Icon className="w-8 h-8" />
                    </div>
                    {project.featured && (
                      <span className="absolute top-3 right-3 text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-2.5 py-1 rounded-full tracking-widest uppercase">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-7 flex flex-col flex-1">
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{project.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/8"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href="https://github.com/battulasandeepcsaiml25-spec"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-4 p-2 rounded-lg glass-panel hover:text-primary hover:bg-primary/10 transition-all shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════
            CERTIFICATIONS
        ════════════════════════════════════ */}
        <section id="certifications" className="py-28 px-6 max-w-6xl mx-auto">
          <Reveal>
            <p className="text-xs font-mono text-secondary tracking-[0.25em] uppercase mb-3">05. Credentials</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-14">Certifications</h3>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Azure Fundamentals",
                sub: "Microsoft Certified · AZ-900",
                Icon: Shield,
                gradient: "from-blue-600/30 to-blue-400/10",
                border: "border-blue-500/30",
                iconBg: "bg-blue-500/20",
                iconColor: "text-blue-400",
                glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
              },
              {
                title: "Design Fundamentals with AI",
                sub: "Adobe Certified",
                Icon: Palette,
                gradient: "from-orange-600/30 to-red-500/10",
                border: "border-orange-500/30",
                iconBg: "bg-orange-500/20",
                iconColor: "text-orange-400",
                glow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
              },
              {
                title: "Communication & Career Readiness",
                sub: "Presentation Skills · Professional Development",
                Icon: Star,
                gradient: "from-emerald-600/30 to-teal-500/10",
                border: "border-emerald-500/30",
                iconBg: "bg-emerald-500/20",
                iconColor: "text-emerald-400",
                glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
              },
            ].map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`glass-panel rounded-2xl overflow-hidden border ${cert.border} transition-all duration-300 ${cert.glow}`}
                >
                  <div className={`h-24 bg-gradient-to-br ${cert.gradient} flex items-center justify-center`}>
                    <div className={`p-4 rounded-xl ${cert.iconBg} ${cert.iconColor}`}>
                      <cert.Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-base mb-1 leading-snug">{cert.title}</h4>
                    <p className="text-xs font-mono text-muted-foreground">{cert.sub}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════
            CONTACT
        ════════════════════════════════════ */}
        <section id="contact" className="py-28 px-6 relative overflow-hidden">
          {/* Vivid blob bg */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[200%] rounded-full bg-primary/6 blur-[120px]" />
            <div className="absolute top-0 right-0 w-[40%] h-full bg-secondary/5 blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-xs font-mono text-primary tracking-[0.25em] uppercase mb-4">06. Contact</p>
              <h3 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                Let&apos;s Build
                <br />
                <span className="text-gradient">Something.</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-14 max-w-xl mx-auto">
                Open for internships, collaborations, and exciting opportunities. Drop a message — I will get back to you.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  label: "Email",
                  value: "battulasandeep2321@gmail.com",
                  href: "mailto:battulasandeep2321@gmail.com",
                  Icon: Mail,
                  color: "text-primary",
                  bg: "bg-primary/8",
                  border: "border-primary/20",
                  glow: "hover-glow-cyan",
                },
                {
                  label: "GitHub",
                  value: "battulasandeepcsaiml25-spec",
                  href: "https://github.com/battulasandeepcsaiml25-spec",
                  Icon: SiGithub,
                  color: "text-secondary",
                  bg: "bg-secondary/8",
                  border: "border-secondary/20",
                  glow: "hover-glow-purple",
                },
                {
                  label: "LinkedIn",
                  value: "sandeep-battula-599418380",
                  href: "https://www.linkedin.com/in/sandeep-battula-599418380",
                  Icon: FaLinkedinIn,
                  color: "text-accent",
                  bg: "bg-accent/8",
                  border: "border-accent/20",
                  glow: "hover-glow-pink",
                },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 0.1}>
                  <motion.a
                    href={item.href}
                    target={item.label !== "Email" ? "_blank" : undefined}
                    rel={item.label !== "Email" ? "noreferrer" : undefined}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`flex flex-col items-center gap-4 p-7 glass-panel rounded-2xl border ${item.border} transition-all duration-300 group ${item.glow}`}
                  >
                    <div className={`p-4 rounded-xl ${item.bg} ${item.color}`}>
                      <item.Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className={`font-bold text-sm ${item.color} mb-1`}>{item.label}</p>
                      <p className="text-xs font-mono text-muted-foreground truncate max-w-[140px]">{item.value}</p>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${item.color} opacity-0 group-hover:opacity-100 transition-opacity -mt-2`} />
                  </motion.a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            FOOTER
        ════════════════════════════════════ */}
        <footer className="py-10 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-mono text-muted-foreground">
              Designed &amp; Built by{" "}
              <span className="text-primary">Battula Venkata Sandeep</span>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/battulasandeepcsaiml25-spec"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sandeep-battula-599418380"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="mailto:battulasandeep2321@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-mono text-muted-foreground/50">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
