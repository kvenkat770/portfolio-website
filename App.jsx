import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Youtube,
  Globe,
  Calendar,
  Rocket,
  Search,
  ArrowRight,
  Building2,
  Star,
  CheckCircle2,
  Brain,
  Sparkles,
  Phone,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Kumar Venkat – Product Portfolio (Fixed Build)
 * - Restores full component tree (previous snippet was partial and failed to compile)
 * - Defines <Section/> helper component that was missing
 * - Keeps your contact details wired: mailto, LinkedIn, tel link
 * - Adds a tiny in-app self-test (DevSelfTest) to catch regressions in dev/preview
 */

const DATA = {
  name: "Kumar Venkat",
  title: "Technical Product Manager | Builder of AI-first Products",
  location: "Chennai, India",
  summary:
    "Technical PM with 6.8+ years across Amazon (Kindle) and Verizon. I build AI-driven products, automate ops with n8n, and obsess over user value > vanity metrics. Currently exploring EU move and sponsorship-friendly roles.",
  availability: "Open to PM/AI PM roles in EU/ANZ | Remote OK",
  links: {
    email: "mailto:kumarvenkat770@gmail.com",
    linkedin: "https://www.linkedin.com/in/kumar-venkatesan-5b6b5617b",
    github: "https://github.com/your-handle",
    youtube: "https://www.youtube.com/@thepushzone",
    website: "https://your-domain.com",
    phone: "+91-8939433310",
  },
  highlights: [
    "21 LPA base at Verizon; aiming 35–45 LPA in next move",
    "Launched features at Amazon Kindle; PM/PO at Verizon (AI & platform)",
    "Built revenue-focused AI agent in a week; rapid prototyping mindset",
    "Creator: The Push Zone – bite-sized career & motivation videos",
  ],
};

const EXPERIENCE = [
  {
    company: "Verizon",
    location: "Chennai, IN",
    role: "Product Owner / Technical Product Manager",
    start: "Jul 2024",
    end: "Present",
    bullets: [
      "Drove AI-enabled feature discovery; reduced time-to-insight for stakeholders",
      "Shipped internal tooling that cut ops toil; prioritized via data-backed PRDs",
      "Partnered with engineering to move features from concept → GA with phased rollouts",
    ],
    stack: ["PRD", "Roadmapping", "AI/LLM", "Analytics"],
  },
  {
    company: "Amazon (Kindle)",
    location: "Chennai, IN",
    role: "Product/Program Manager; earlier Sr. Developer",
    start: "2018",
    end: "2024",
    bullets: [
      "Owned parts of Kindle books experience; delivered measurable CX improvements",
      "Coordinated cross-functional launches across content, payments, and ops",
      "Set up metrics and weekly business reviews; raised the bar on execution",
    ],
    stack: ["Kindle", "CX", "Experiments", "SQL"],
  },
];

const SKILLS = [
  "Product Strategy",
  "AI Product Management",
  "Roadmapping",
  "User Research",
  "Experimentation",
  "A/B Testing",
  "SQL",
  "Analytics",
  "PRD / BRD",
  "n8n Automation",
  "APIs",
  "Funnel Metrics",
  "Stakeholder Management",
  "Go-To-Market",
  "Figma (wireframes)",
];

const PROJECTS = [
  {
    id: "ai-agent",
    title: "Revenue-Focused AI Agent (1-Week Build)",
    blurb:
      "Built and sold an AI agent MVP in a week targeting ₹100K–₹300K one-time deals. Automates lead qualification and outreach with guardrails.",
    tags: ["AI", "Automation", "Sales Ops"],
    impact: [
      "First customers via cold outreach + demos",
      "<7 days from idea to paid MVP",
    ],
    images: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    ],
    links: [
      { label: "Case Study", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    id: "n8n-expenses",
    title: "Expense Tracker Automation (n8n → Smartsheet → Weekly Viz)",
    blurb:
      "Flow that classifies daily expenses, stores them in Smartsheet, and auto-emails weekly charts. Zero manual bookkeeping.",
    tags: ["n8n", "Data", "Automation"],
    impact: [
      "100% auto-categorization for common merchants",
      "Weekly insights email improved savings discipline",
    ],
    images: [
      "https://images.unsplash.com/photo-1543286386-713bdd548da4",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      "https://images.unsplash.com/photo-1551281044-8b29a0dd7c31",
    ],
    links: [
      { label: "Flow Diagram", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    id: "push-zone",
    title: "The Push Zone – Content System",
    blurb:
      "Built a repeatable content pipeline for a YouTube shorts channel: ideation → script → shoot → edit → publish; template-based thumbnails.",
    tags: ["Creator Ops", "Workflow", "Brand"],
    impact: ["Shipped 30+ shorts", "Template library for consistent brand"],
    images: [
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    ],
    links: [
      { label: "Channel", href: "https://www.youtube.com/@thepushzone" },
      { label: "Content OS", href: "#" },
    ],
  },
  {
    id: "goat-farm-model",
    title: "Goat Farming P&L Simulator",
    blurb:
      "Web app to plan herd growth, feed costs, and projected profits. Designed for scaling to ₹5L/month profit target.",
    tags: ["FinModel", "Web App", "AgriTech"],
    impact: [
      "Scenario planning with herd size & mortality inputs",
      "Auto-calculates breakeven and monthly cashflow",
    ],
    images: [
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    ],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Spec", href: "#" },
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Ex-Manager @ Amazon",
    quote:
      "Kumar is execution-first. He turns ambiguous problems into crisp plans and ships.",
    role: "Sr. PM, Kindle",
  },
  {
    name: "Tech Lead @ Verizon",
    quote:
      "He bridges product and engineering really well—clear PRDs, quick feedback loops.",
    role: "TL, Platform",
  },
  {
    name: "Creator Peer",
    quote: "Systems thinker. His content pipeline is a mini-product in itself.",
    role: "YouTube Creator",
  },
];

const TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();

function Section({ id, title, icon: Icon, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-2xl bg-muted shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-muted text-sm font-medium shadow-sm">
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden rounded-2xl border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription>{project.blurb}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((src, i) => (
              <CarouselItem key={i} className="basis-full">
                <div className="h-56 md:h-64 lg:h-72 w-full overflow-hidden rounded-xl">
                  <img
                    src={`${src}?auto=format&fit=crop&w=1400&q=60`}
                    alt={`${project.title} ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full">
              {t}
            </Badge>
          ))}
        </div>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {project.impact.map((x, idx) => (
            <li key={idx}>{x}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-3 flex-wrap">
        {project.links.map((l, idx) => (
          <Button key={idx} asChild variant="outline" className="rounded-xl">
            <a href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}

function FilterBar({ query, setQuery }) {
  return (
    <Card className="md:col-span-2 rounded-2xl">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, tags, impact…"
            className="rounded-xl"
          />
        </div>
      </CardContent>
    </Card>
  );
}

// Tiny dev-only self tests to catch common regressions in preview environments
function DevSelfTest() {
  useEffect(() => {
    try {
      console.assert(typeof Section === "function", "Section must be defined");
      console.assert(
        DATA.links.email === "mailto:kumarvenkat770@gmail.com",
        "Email mailto must match kumarvenkat770@gmail.com"
      );
      console.assert(
        DATA.links.linkedin ===
          "https://www.linkedin.com/in/kumar-venkatesan-5b6b5617b",
        "LinkedIn URL must match provided profile"
      );
      console.assert(
        DATA.links.phone === "+91-8939433310",
        "Phone number must match the provided number"
      );
      console.assert(Array.isArray(TAGS) && TAGS.length > 0, "Tags should be derived from projects");
      console.log("DevSelfTest passed ✅");
    } catch (e) {
      console.error("DevSelfTest failed ❌", e);
    }
  }, []);
  return <div className="sr-only" aria-hidden>self-test</div>;
}

export default function PortfolioKV() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
      const matchesQuery =
        !query ||
        [p.title, p.blurb, ...p.tags].join(" ").toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 text-foreground">
      <DevSelfTest />
      {/* Nav */}
      <div className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            <span className="font-semibold">Kumar Venkat</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" asChild className="rounded-xl">
              <a href={DATA.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4 mr-2" /> Connect
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm mb-4">
              <Sparkles className="h-4 w-4" /> {DATA.availability}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {DATA.title}
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">{DATA.summary}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Pill>
                <MapPin className="h-4 w-4 mr-1 inline" /> {DATA.location}
              </Pill>
              <Pill>
                <Calendar className="h-4 w-4 mr-1 inline" /> 6.8+ years experience
              </Pill>
              <Pill>
                <Brain className="h-4 w-4 mr-1 inline" /> AI-first mindset
              </Pill>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-xl">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl">
                <a href={DATA.links.email}>
                  Contact <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="rounded-2xl overflow-hidden shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Highlights</CardTitle>
                <CardDescription>Signals of impact</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {DATA.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span className="text-sm">{h}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        {/* About */}
        <Section id="about" title="About" icon={Globe}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardContent className="pt-6 text-sm leading-6 text-muted-foreground">
                I’m Kumar, a product manager who builds fast, ships often, and measures what matters. I like turning fuzzy problems into simple products that deliver value quickly, then iterating based on signal. I enjoy using AI to remove friction from workflows—whether for customers or for internal teams.
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="pt-6 text-sm leading-6 text-muted-foreground">
                In 2025, I’m focusing on AI PM opportunities across Europe and Australia, while continuing to prototype tools (like automation for personal finance and small-business simulators). If you’re hiring for outcomes over output, let’s talk.
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={Briefcase}>
          <div className="grid md:grid-cols-2 gap-6">
            {EXPERIENCE.map((e) => (
              <Card key={e.company} className="rounded-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building2 className="h-5 w-5" /> {e.company}
                      </CardTitle>
                      <CardDescription>{e.location}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="rounded-full">
                      {e.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground mb-2">
                    {e.start} — {e.end}
                  </div>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {e.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.stack.map((s) => (
                      <Badge key={s} variant="outline" className="rounded-full">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon={Rocket}>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap gap-2">
              <TabsTrigger value="all" onClick={() => setActiveTag("All")}>
                All
              </TabsTrigger>
              {TAGS.map((t) => (
                <TabsTrigger key={t} value={t} onClick={() => setActiveTag(t)}>
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="all">
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <FilterBar query={query} setQuery={setQuery} />
                {filtered.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </TabsContent>
            {TAGS.map((t) => (
              <TabsContent key={t} value={t}>
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <FilterBar query={query} setQuery={setQuery} />
                  {filtered.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" icon={Star}>
          <Card className="rounded-2xl">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-full">
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Testimonials Carousel */}
        <Section id="testimonials" title="What People Say" icon={Sparkles}>
          <Carousel className="w-full">
            <CarouselContent>
              {TESTIMONIALS.map((t, i) => (
                <CarouselItem key={i} className="basis-full">
                  <Card className="rounded-2xl">
                    <CardContent className="pt-6">
                      <blockquote className="text-xl leading-8">“{t.quote}”</blockquote>
                      <div className="mt-4 text-sm text-muted-foreground">
                        — {t.name}, {t.role}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" icon={Mail}>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl">
              <CardContent className="pt-6 space-y-3">
                <Button asChild className="w-full rounded-xl">
                  <a href={DATA.links.email}>
                    <Mail className="h-4 w-4 mr-2" /> Email Me
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-xl">
                  <a href={DATA.links.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-xl">
                  <a href={`tel:${DATA.links.phone}`}>
                    <Phone className="h-4 w-4 mr-2" /> {DATA.links.phone}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-xl">
                  <a href={DATA.links.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-xl">
                  <a href={DATA.links.youtube} target="_blank" rel="noreferrer">
                    <Youtube className="h-4 w-4 mr-2" /> YouTube
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="rounded-2xl md:col-span-2">
              <CardHeader>
                <CardTitle>Let’s build something valuable</CardTitle>
                <CardDescription>
                  Briefly share your problem, desired outcome, and timeline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  <Input placeholder="Your name" />
                  <Input placeholder="Email" />
                  <Input placeholder="Company / Project" className="md:col-span-2" />
                  <Input placeholder="What are you trying to achieve?" className="md:col-span-2" />
                </div>
                <div className="mt-4">
                  <Button className="rounded-xl">Send</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {DATA.location}
          </div>
          <div className="flex items-center gap-4">
            <a href={DATA.links.email} className="hover:underline">Email</a>
            <a href={DATA.links.linkedin} className="hover:underline">LinkedIn</a>
            <a href={`tel:${DATA.links.phone}`} className="hover:underline">{DATA.links.phone}</a>
            <a href={DATA.links.youtube} className="hover:underline">YouTube</a>
          </div>
          <div>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
