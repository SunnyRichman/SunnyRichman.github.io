"use client";

import { useEffect, useState } from "react";
import { TypewriterHeading } from "@/components/typewriter-heading";
import { GitHubLogo, LinkedInLogo, GmailLogo } from "@/components/social-logos";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  ExternalLink,
  Mail,
  Menu,
  Phone,
  Terminal,
  X,
} from "lucide-react";

const projectGroups = [
  {
    title: "Enterprise Experience",
    projects: [
      {
        number: "01",
        title: "AFC — Audit Financial Management",
        type: "Enterprise web application",
        organization: "Toyota Tsusho Nexty Electronics (Thailand) Co., Ltd.",
        description:
          "A decision-support platform that evaluates customer financial performance and investment viability through focused dashboards and secure data workflows.",
        details: [],
        stack: ["VueJS", "Vuetify", "PHP Laravel", "PostgreSQL"],
        accent: "navy",
      },
      {
        number: "02",
        title: "AMS — Audit Management System",
        type: "Document audit platform",
        organization: "Toyota Tsusho Nexty Electronics (Thailand) Co., Ltd.",
        description:
          "A multi-tier document verification platform with clear status tracking, audit logs, and RESTful APIs designed for stakeholder collaboration.",
        details: [],
        stack: ["VueJS", "PHP Laravel", "REST API", "GitLab"],
        accent: "green",
      },
    ],
  },
  {
    title: "Senior Project",
    projects: [
      {
        number: "03",
        title: "Wachsia",
        type: "Eco-friendly shopping mobile app",
        description:
          "A mobile application encouraging eco-friendly purchasing through a tree-growing mini-game powered by real-time reward point accumulation.",
        details: [
          "Built the cross-platform frontend and application logic with Dart and Flutter for a responsive, intuitive experience.",
          "Developed Node.js REST APIs for product catalogs, user statistics, and point transactions.",
          "Containerized backend services with Docker and deployed to Google Cloud Platform Compute Engine.",
        ],
        stack: ["Dart", "Flutter", "Node.js", "Docker", "GCP"],
        accent: "gold",
      },
    ],
  },
  {
    title: "Selected Course Projects",
    projects: [
      {
        number: "04",
        title: "Xiang Cao Project",
        type: "ITCS414 · Information Retrieval and Storage",
        description:
          "Implemented a search engine system using Elasticsearch and Kibana for effective data indexing, retrieval, and visualization.",
        details: [
          "Built a responsive web interface with HTML, CSS, JavaScript, and Node.js, integrated through RESTful APIs.",
          "Used generative AI tools to assist with data cleaning and improve data quality and search precision.",
        ],
        stack: ["Elasticsearch", "Kibana", "Node.js", "JavaScript"],
        accent: "navy",
      },
      {
        number: "05",
        title: "FESTA Project",
        type: "ITCS212 · Web Programming",
        description:
          "Demonstrated dynamic web application development with an interactive webpage built using HTML, CSS, and JavaScript.",
        details: [
          "Integrated backend functionality through RESTful APIs.",
          "Connected a MySQL database for structured data management and client-server communication.",
        ],
        stack: ["HTML", "CSS", "JavaScript", "REST API", "MySQL"],
        accent: "green",
      },
    ],
  },
];

const skillGroups = [
  {
    label: "development",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "HTML / CSS",
      "VueJS",
      "Dart",
      "Flutter",
    ],
  },
  {
    label: "backend + data",
    items: [
      "Node.js",
      "Express",
      "Spring",
      "PHP Laravel",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    label: "cloud + delivery",
    items: [
      "AWS VPC / EC2",
      "Docker",
      "GitHub Actions",
      "Git",
      "GitHub",
      "GitLab",
      "GCP",
    ],
  },
  {
    label: "observability",
    items: ["Elasticsearch", "Kibana", "JUnit", "Agile", "Scrum"],
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const topSection = document.getElementById("top");
    if (!topSection) return;

    const updateVisibility = () => {
      const shouldShow =
        topSection.getBoundingClientRect().bottom <= window.innerHeight * 0.5;
      setShowBackToTop(shouldShow);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFAFA] text-[#17202A]">
      <nav className="sticky top-0 z-50 border-b border-[#006C6C]/15 bg-[#FAFAFA]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-tight text-[#006C6C]"
            aria-label="Sunny home"
          >
            sunny<span className="text-[#AA800E]">.</span>dev
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {["about", "work", "stack", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-mono text-xs uppercase tracking-[0.18em] text-[#17202A]/65 transition-colors hover:text-[#AA800E]"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#006C6C]/10 bg-[#FAFAFA] px-6 py-4 md:hidden">
            {["about", "work", "stack", "contact"].map((item) => (
              <a
                onClick={() => setMenuOpen(false)}
                key={item}
                href={`#${item}`}
                className="block py-2 font-mono text-xs uppercase tracking-[0.18em] text-[#17202A]/70"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section id="top" className="relative mx-auto max-w-6xl px-6 pb-16 pt-16">
        <div
          className="absolute right-10 top-16 hidden h-56 w-56 rounded-full bg-[#FFFFC9] blur-3xl lg:block"
          aria-hidden="true"
        />
        <div className="relative max-w-4xl">
          <div className="mb-7 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-[#006C6C]">
            <span className="h-px w-8 bg-[#AA800E]" /> AVAILABLE FOR
            OPPORTUNITIES
          </div>
          <div className="flex flex-row items-center gap-5 sm:gap-8">
            <figure className="order-2 shrink-0 text-center sm:order-1 flex flex-col items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/624473819_1882084552400402_5295881247465332127_n-tx2f1vNaLnu1KXBFrytsCKGs4IlhTS.jpg"
                alt="Raweerot in a denim jacket at a shopping mall"
                className="h-44 w-44 rounded-full border-4 border-white object-cover object-center shadow-[0_8px_28px_rgba(0,53,173,0.18)] sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              />
              <figcaption className="mt-2.5 max-w-[200px] text-center font-mono text-[20px] leading-4 text-[#17202A]/60 sm:max-w-[400px]">
                Raweerot Bhasidhchirapiroch (Sunny)
              </figcaption>
            </figure>
            <div className="order-1 min-w-0 sm:order-2">
              <TypewriterHeading />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#0035AD] bg-[#0035AD] px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white">
              Software Engineering · Full Stack Developer
            </span>
            <span className="font-mono text-xs text-[#17202A]/55">
              / mahidol ICT
            </span>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#17202A]/70">
            Software Engineering graduate with enterprise experience building
            full-stack systems. I care about cloud infrastructure, workflow
            automation, and clean architecture that keeps teams moving.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-[#006C6C] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#0035AD]"
            >
              Explore my work{" "}
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <a
              href="mailto:hoylordzbaby@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[#006C6C]/25 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#006C6C] transition-colors hover:border-[#AA800E] hover:text-[#AA800E]"
            >
              Get in touch <Mail size={14} />
            </a>
          </div>
        </div>
        <div className="mt-12 grid max-w-3xl grid-cols-2 gap-y-8 border-t border-[#006C6C]/15 pt-6 sm:grid-cols-4">
          <Stat value="3.16" label="GPA / 4.00" />
          <Stat value="2026" label="Graduating" />
          <Stat value="2+" label="Enterprise systems" />
          <Stat value="B2" label="English level" />
        </div>
      </section>

      <section id="about" className="border-y border-[#006C6C]/15 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionLabel index="01" title="About me" />
          <div>
            <p className="max-w-2xl text-2xl leading-relaxed text-[#17202A]">
              I enjoy sitting between product code and production systems —
              making software useful, observable, and easier to operate.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Info
                label="education"
                value="B.Sc. ICT · Software Engineering"
                detail="Mahidol University · 2022—2026"
              />
              <Info
                label="experience"
                value="Full-stack Developer Intern"
                detail="Toyota Tsusho Nexty · Jan—Mar 2026"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-6xl px-6 pb-16 pt-16"
      >
        <div className="mb-12 flex items-end justify-between">
          <SectionLabel index="02" title="Selected work" />
          <span className="hidden font-mono text-xs text-[#17202A]/45 sm:block">
            (01-05)
          </span>
        </div>
        <div className="space-y-14">
          {projectGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-mono text-sm font-bold uppercase tracking-[0.14em] text-[#0035AD]">
                {group.title}
              </h3>
              <div className="grid gap-5 md:grid-cols-2">
                {group.projects.map((project) => (
                  <ProjectCard
                    key={project.number}
                    project={project}
                    total={5}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="bg-[#0035AD] text-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-16">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-[#FFC726]">
                03 / TOOLKIT
              </span>
              <h2 className="mt-3 font-mono text-3xl font-bold sm:text-4xl">
                Built with intention<span className="text-[#FFC726]">.</span>
              </h2>
            </div>
            <Terminal className="hidden text-[#FFC726] sm:block" size={30} />
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="bg-[#0035AD] p-6">
                <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[#FFC726]">
                  {group.label}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <Check size={14} className="text-[#FFC726]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 pb-16 pt-16"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionLabel index="04" title="Let's connect" />
          <div>
            <h2 className="max-w-xl font-mono text-3xl font-bold leading-tight text-[#006C6C] sm:text-5xl">
              Have a problem worth solving?
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-[#17202A]/65">
              Whether it&apos;s building a better workflow, shipping a new
              product, or making infrastructure less mysterious — I&apos;d love
              to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hoylordzbaby@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-[#AA800E]/25 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.13em] text-[#AA800E] hover:border-[#AA800E]"
              >
                <GmailLogo />
              </a>
              <a
                href="tel:0648131412"
                className="inline-flex items-center gap-2 rounded-full border border-[#006C6C]/25 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.13em] text-[#006C6C] hover:border-[#006C6C]"
              >
                <Phone size={14} />
              </a>
              <a
                href="https://github.com/SunnyRichman"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#17202A]/25 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.13em] text-[#17202A] hover:border-[#17202A]"
              >
                <GitHubLogo />
              </a>
              <a
                href="https://www.linkedin.com/in/sunnyict20/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/25 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.13em] text-[#0A66C2] hover:border-[#0A66C2]"
              >
                <LinkedInLogo />
              </a>
            </div>

          </div>
        </div>
      </section>

      <footer className="border-t border-[#006C6C]/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-7 font-mono text-xs text-[#17202A]/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© 2026 Raweerot Bhasidhchirapiroch</span>
          <span>
            made with curiosity + care<span className="text-[#AA800E]">.</span>
          </span>
        </div>
      </footer>
      {showBackToTop && (
        <a
          href="#top"
          aria-label="Back to top"
          className="animate-float-up fixed bottom-6 right-6 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-[#006C6C]/30 bg-[#FAFAFA] text-[#006C6C] shadow-md transition-colors hover:border-[#006C6C] hover:bg-[#FFFFC9] sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      )}
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-2xl font-bold text-[#0035AD]">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#17202A]/45">
        {label}
      </div>
    </div>
  );
}
function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div>
      <span className="font-mono text-xs tracking-[0.2em] text-[#AA800E]">
        {index} /
      </span>
      <h2 className="mt-2 font-mono text-2xl font-bold text-[#006C6C]">
        {title}
        <span className="text-[#AA800E]">.</span>
      </h2>
    </div>
  );
}
function Info({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="border-l-2 border-[#AA800E] pl-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#17202A]/45">
        {label}
      </div>
      <div className="mt-2 font-mono text-sm font-bold text-[#006C6C]">
        {value}
      </div>
      <div className="mt-1 text-sm text-[#17202A]/55">{detail}</div>
    </div>
  );
}
function ProjectCard({
  project,
  total,
}: {
  project: (typeof projectGroups)[number]["projects"][number];
  total: number;
}) {
  const color =
    project.accent === "navy"
      ? "#0035AD"
      : project.accent === "gold"
        ? "#AA800E"
        : "#006C6C";
  return (
    <article className="group flex min-h-[390px] flex-col rounded-2xl border border-[#006C6C]/20 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#AA800E] hover:shadow-[6px_6px_0_#FFFFC9]">
      <div className="flex items-center justify-between font-mono text-xs text-[#17202A]/40">
        <span>
          {project.number} / {String(total).padStart(2, "0")}
        </span>
        <span style={{ color }}>●</span>
      </div>
      <div className="mt-8">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#17202A]/45">
          {project.type}
        </div>
        <h4 className="font-mono text-xl font-bold leading-snug text-[#006C6C]">
          {project.title}
        </h4>
        {"organization" in project && (
          <p className="mt-2 font-mono text-xs font-semibold leading-5 text-[#AA800E]">
            {project.organization}
          </p>
        )}
        <p className="mt-4 text-sm leading-6 text-[#17202A]/65">
          {project.description}
        </p>
        {project.details.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[#17202A]/65">
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AA800E]" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[#FFFFC9] px-2 py-1 font-mono text-[10px] text-[#0035AD]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}