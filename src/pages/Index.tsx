import { Button } from "@/components/ui/button";
import Spotlight from "@/components/Spotlight";
import { Mail, Phone, Linkedin, Github, ArrowRight } from "lucide-react";

const Index = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#home" className="font-display text-lg font-semibold story-link">GS</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-primary story-link">Projects</a>
            <a href="#experience" className="hover:text-primary story-link">Experience</a>
            <a href="#skills" className="hover:text-primary story-link">Skills</a>
            <a href="#education" className="hover:text-primary story-link">Education</a>
            <a href="#contact" className="hover:text-primary story-link">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:gunjansonawane462@gmail.com" aria-label="Email"><Mail className="opacity-80 hover:opacity-100 transition" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="opacity-80 hover:opacity-100 transition" /></a>
            <a href="tel:+919923688237" aria-label="Phone"><Phone className="opacity-80 hover:opacity-100 transition" /></a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" onMouseMove={handleMouseMove} className="relative overflow-hidden">
          <div className="container mx-auto py-20 md:py-28">
            <div className="relative rounded-2xl border border-border/60 bg-gradient-to-b from-background to-secondary/30 p-8 md:p-14 overflow-hidden">
              <Spotlight />
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs tracking-wide text-muted-foreground">Pune, India • Backend-focused Software Engineer</p>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight animate-enter">
                Gunjan Sonawane
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg">
                I design and build scalable backend systems and RESTful APIs with Python, Django & DRF — integrating clean, secure services with React frontends.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">Python</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">Django</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">DRF</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">React</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">MongoDB</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">MySQL</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">REST APIs</span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="#projects">View Projects <ArrowRight /></a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:gunjansonawane462@gmail.com">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="container mx-auto py-16 md:py-24">
          <header className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Experience</h2>
            <p className="text-sm text-muted-foreground">6 months total</p>
          </header>
          <div className="grid gap-6">
            <article className="rounded-xl border border-border bg-card p-6 hover-scale">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold">Software Engineer Intern · Coding Wolf Private Limited</h3>
                <span className="text-xs text-muted-foreground">Jul 2024 – Dec 2024 · Pune, India</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Built and maintained scalable backend systems with Python, Django, and DRF</li>
                <li>Developed and integrated RESTful APIs with React for seamless UX</li>
                <li>Implemented secure authentication, validation, and robust error handling</li>
                <li>Optimized SQL/ORM queries to reduce latency</li>
                <li>Authored comprehensive technical documentation</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container mx-auto py-16 md:py-24">
          <header className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Projects</h2>
            <p className="text-sm text-muted-foreground">A selection of hands-on builds</p>
          </header>
          <div className="grid md:grid-cols-2 gap-6">
            {/* DocAI */}
            <article className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-xl" aria-labelledby="docai-title">
              <h3 id="docai-title" className="font-semibold group-hover:text-primary">DocAI</h3>
              <p className="mt-2 text-sm text-muted-foreground">Full‑stack collaboration platform with real-time sync using Socket.IO, JWT auth, and autosave with MongoDB.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-2 py-1">React</span>
                <span className="rounded-full bg-secondary px-2 py-1">Node</span>
                <span className="rounded-full bg-secondary px-2 py-1">Express</span>
                <span className="rounded-full bg-secondary px-2 py-1">MongoDB</span>
                <span className="rounded-full bg-secondary px-2 py-1">JWT</span>
              </div>
              <div className="mt-4 flex gap-3">
                <Button variant="link" asChild>
                  <a href="#" aria-label="View DocAI on GitHub" className="inline-flex items-center gap-1">View on GitHub <Github className="size-4" /></a>
                </Button>
              </div>
            </article>

            {/* Real-time Chat */}
            <article className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-xl" aria-labelledby="chat-title">
              <h3 id="chat-title" className="font-semibold group-hover:text-primary">Real‑time Chat Application</h3>
              <p className="mt-2 text-sm text-muted-foreground">Low-latency chat with Django Channels, WebSockets, and URL-based rooms with async consumers.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-2 py-1">Django</span>
                <span className="rounded-full bg-secondary px-2 py-1">Python</span>
                <span className="rounded-full bg-secondary px-2 py-1">WebSockets</span>
                <span className="rounded-full bg-secondary px-2 py-1">SQLite</span>
              </div>
              <div className="mt-4 flex gap-3">
                <Button variant="link" asChild>
                  <a href="#" aria-label="View Chat App on GitHub" className="inline-flex items-center gap-1">View on GitHub <Github className="size-4" /></a>
                </Button>
              </div>
            </article>

            {/* Lyric Finder */}
            <article className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-xl" aria-labelledby="lyric-title">
              <h3 id="lyric-title" className="font-semibold group-hover:text-primary">Lyric Finder Application</h3>
              <p className="mt-2 text-sm text-muted-foreground">Search and display song lyrics with PDF export and dark mode using React and REST APIs.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-2 py-1">React</span>
                <span className="rounded-full bg-secondary px-2 py-1">Material-UI</span>
                <span className="rounded-full bg-secondary px-2 py-1">REST APIs</span>
              </div>
              <div className="mt-4 flex gap-3">
                <Button variant="link" asChild>
                  <a href="#" aria-label="View Lyric Finder on GitHub" className="inline-flex items-center gap-1">View on GitHub <Github className="size-4" /></a>
                </Button>
              </div>
            </article>

            {/* Social Media Platform */}
            <article className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-xl" aria-labelledby="smp-title">
              <h3 id="smp-title" className="font-semibold group-hover:text-primary">Social Media Platform</h3>
              <p className="mt-2 text-sm text-muted-foreground">Full‑stack platform with authentication, profiles, media uploads, and optimized search (Django ORM).</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-2 py-1">Django</span>
                <span className="rounded-full bg-secondary px-2 py-1">HTML/CSS</span>
                <span className="rounded-full bg-secondary px-2 py-1">JavaScript</span>
              </div>
              <div className="mt-4 flex gap-3">
                <Button variant="link" asChild>
                  <a href="#" aria-label="View Social Media Platform on GitHub" className="inline-flex items-center gap-1">View on GitHub <Github className="size-4" /></a>
                </Button>
              </div>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="container mx-auto py-16 md:py-24">
          <header className="mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Skills</h2>
          </header>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold">Languages & Frontend</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-2 py-1">Python</span>
                <span className="rounded-full bg-secondary px-2 py-1">JavaScript (ES6+)</span>
                <span className="rounded-full bg-secondary px-2 py-1">HTML5</span>
                <span className="rounded-full bg-secondary px-2 py-1">CSS3</span>
                <span className="rounded-full bg-secondary px-2 py-1">React.js</span>
                <span className="rounded-full bg-secondary px-2 py-1">Bootstrap</span>
              </div>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold">Backend & Databases</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-2 py-1">Django</span>
                <span className="rounded-full bg-secondary px-2 py-1">Django REST Framework</span>
                <span className="rounded-full bg-secondary px-2 py-1">MongoDB</span>
                <span className="rounded-full bg-secondary px-2 py-1">MySQL</span>
                <span className="rounded-full bg-secondary px-2 py-1">RESTful APIs</span>
              </div>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold">Tools & Practices</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-2 py-1">Git</span>
                <span className="rounded-full bg-secondary px-2 py-1">GitHub</span>
                <span className="rounded-full bg-secondary px-2 py-1">Linux</span>
                <span className="rounded-full bg-secondary px-2 py-1">Postman</span>
                <span className="rounded-full bg-secondary px-2 py-1">VS Code</span>
                <span className="rounded-full bg-secondary px-2 py-1">Version Control</span>
              </div>
            </article>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="container mx-auto py-16 md:py-24">
          <header className="mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Education</h2>
          </header>
          <article className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold">B.Tech., Computer Engineering</h3>
            <p className="text-sm text-muted-foreground">G.H. Raisoni College of Engineering and Management · CGPA 7.42</p>
          </article>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto py-16 md:py-24">
          <div className="rounded-2xl border border-border bg-hero-gradient p-8 md:p-12 text-primary-foreground shadow-[var(--shadow-elevated)]">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Let’s build something impactful</h2>
            <p className="mt-2 max-w-2xl text-sm/relaxed opacity-90">Open to internships and full‑time roles in backend/Full‑stack. I value clean APIs, performance, and thoughtful DX.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:gunjansonawane462@gmail.com" className="inline-flex items-center gap-2"><Mail className="size-4"/> Email Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+919923688237" className="inline-flex items-center gap-2"><Phone className="size-4"/> Call</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gunjan Sonawane</p>
          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-1 hover:text-primary"><Linkedin className="size-4"/> LinkedIn</a>
            <a href="mailto:gunjansonawane462@gmail.com" className="inline-flex items-center gap-1 hover:text-primary"><Mail className="size-4"/> Email</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-primary"><Github className="size-4"/> GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
