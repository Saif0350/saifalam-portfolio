import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Eye,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Saif Alam Ansari",
  description:
    "View and download the resume of Saif Alam Ansari, Full Stack & DevOps Engineer.",
};

const resumePath = "/resume/Saif_Alam_Ansari_Resume.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white font-outfit">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to portfolio
          </Link>

          <span className="text-xs uppercase tracking-[0.3em] text-white/40">
            SA / RESUME
          </span>
        </nav>

        {/* Hero */}
        <section className="pb-14 pt-20 text-center md:pb-20 md:pt-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs tracking-widest text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            PROFESSIONAL PROFILE
          </div>

          <h1 className="font-outfit text-7xl font-bold tracking-tight stroke-text md:text-8xl lg:text-9xl">
            <span>{`"RESUME"`}</span>
          </h1>

          <h2 className="mt-8 text-2xl font-semibold md:text-4xl">
            Saif Alam Ansari
          </h2>

          <p className="mt-3 text-base text-white/60 md:text-lg">
            Full Stack & DevOps Engineer
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45 md:text-base">
            Building scalable web applications, cloud infrastructure and modern
            digital experiences with React, Next.js, TypeScript, Node.js and
            AWS.
          </p>
        </section>

        {/* Resume card */}
        <section className="mx-auto max-w-4xl pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-6 md:p-10">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-white/[0.035] blur-3xl" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <FileText size={29} strokeWidth={1.5} />
                </div>

                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-[11px] uppercase tracking-widest text-white/40">
                      Curriculum Vitae
                    </span>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] text-emerald-400">
                      PDF DOCUMENT
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold md:text-2xl">
                    My Professional Resume
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/45">
                    Explore my technical skills, professional experience,
                    education and projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-9 h-px bg-white/10" />

            {/* Resume details */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs text-white/35">Format</p>
                <p className="mt-2 text-sm font-medium">PDF Document</p>
              </div>
              <div>
                <p className="text-xs text-white/35">Location</p>
                <p className="mt-2 text-sm font-medium">London, UK</p>
              </div>
              <div>
                <p className="text-xs text-white/35">Specialisation</p>
                <p className="mt-2 text-sm font-medium">Full Stack / DevOps</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={resumePath}
                download="Saif_Alam_Ansari_Resume.pdf"
                className="group inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-200"
              >
                <ArrowDownToLine
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
                Download Resume
              </a>

              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-xl border border-white/15 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                <Eye size={18} />
                Preview Resume
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/35">
              <CheckCircle2 size={14} />
              Available for viewing and download
            </div>
          </div>

          {/* Profile section */}
          <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 md:flex-row">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/my_image/photu.png"
                alt="Saif Alam Ansari"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold">Saif Alam Ansari</p>
                <p className="mt-1 text-xs text-white/45">
                  Full Stack & DevOps Engineer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/saif0350"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/50 transition-colors hover:text-white"
              >
                <Github size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/saifalamansari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/50 transition-colors hover:text-white"
              >
                <Linkedin size={21} />
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                Portfolio
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
