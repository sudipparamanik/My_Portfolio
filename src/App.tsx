import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Cloud,
  Server, Database, Boxes, ExternalLink, Award, BriefcaseBusiness,
  CalendarDays, FileText, ZoomIn
} from "lucide-react";
import { useState } from "react";
import { portfolio } from "./data/portfolio";

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .6 } } };

type Certificate = (typeof portfolio.certificates)[number];

function Architecture() {
  return (
    <div className="relative h-[390px] w-full max-w-[560px] mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_40%,rgba(255,153,0,.12),transparent_55%)]" />
      <div className="absolute left-1/2 top-6 -translate-x-1/2 glass rounded-2xl px-5 py-3 mono text-xs text-orange-300">INTERNET</div>
      <div className="absolute left-1/2 top-[82px] -translate-x-1/2 card rounded-2xl p-4 flex items-center gap-3"><Cloud size={22} /><span>API Gateway</span></div>
      <div className="absolute left-1/2 top-[172px] -translate-x-1/2 card rounded-2xl p-4 flex items-center gap-3"><Server size={22} /><span>Lambda</span></div>
      <div className="absolute left-[5%] top-[275px] card rounded-2xl p-4 flex items-center gap-3"><Database size={22} /><span>DynamoDB</span></div>
      <div className="absolute right-[5%] top-[275px] card rounded-2xl p-4 flex items-center gap-3"><Boxes size={22} /><span>S3</span></div>
      <motion.div animate={{ y: [0, 90, 180, 270], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-[62px] h-2 w-2 -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(255,153,0,.9)]" />
      <div className="absolute left-1/2 top-[54px] h-[270px] w-px -translate-x-1/2 border-l border-dashed border-white/10" />
      <div className="absolute left-1/2 top-[350px] -translate-x-1/2 mono whitespace-nowrap text-[11px] text-white/40">CloudWatch • SQS • SNS</div>
    </div>
  );
}

function CertificateModal({ certificate, onClose }: { certificate: Certificate; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: .96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} onClick={(e) => e.stopPropagation()} className="glass w-full max-w-5xl overflow-hidden rounded-3xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div><p className="text-sm font-semibold">{certificate.title}</p><p className="mt-1 text-xs text-white/40">{certificate.issuer} · {certificate.date}</p></div>
          <button onClick={onClose} aria-label="Close certificate" className="rounded-xl border border-white/10 p-2 hover:border-orange-300/40"><X size={18} /></button>
        </div>
        <div className="max-h-[78vh] overflow-auto bg-black/20 p-3 sm:p-5">
          <img src={certificate.image} alt={certificate.title} className="mx-auto w-full max-w-4xl rounded-xl border border-white/10" />
        </div>
        <div className="flex justify-end border-t border-white/10 px-5 py-4">
          <a href={certificate.file} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-400 px-4 py-2.5 text-sm font-semibold text-black">Open PDF <ArrowUpRight className="ml-1 inline" size={15} /></a>
        </div>
      </motion.div>
    </div>
  );
}

function ProfileModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()} className="relative max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#080c13] p-2 shadow-2xl">
        <button onClick={onClose} aria-label="Close profile photo" className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80"><X size={18} /></button>
        <img src={portfolio.profileImage} alt="Sudip Paramanik" className="max-h-[82vh] w-auto rounded-2xl object-contain" />
      </motion.div>
    </div>
  );
}

export function App() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const nav = ["About", "Skills", "Projects", "Experience", "Certificates", "Contact"];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed top-0 z-50 w-full px-4 pt-4">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
          <a href="#top" className="mono font-semibold tracking-widest">SP<span className="text-orange-400">.</span></a>
          <div className="hidden items-center gap-5 text-sm text-white/70 md:flex">
            {nav.map(n => <a key={n} href={"#" + n.toLowerCase()} className="hover:text-white transition">{n}</a>)}
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="hover:text-orange-300"><Github size={18} /></a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hover:text-orange-300"><Linkedin size={18} /></a>
          </div>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden">{open ? <X /> : <Menu />}</button>
        </nav>
        {open && <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-5 md:hidden">{nav.map(n => <a onClick={() => setOpen(false)} key={n} href={"#" + n.toLowerCase()} className="block py-3 text-white/80">{n}</a>)}</div>}
      </header>

      <main id="top">
        <section className="grid-bg relative flex min-h-screen items-center px-5 pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,153,0,.08),transparent_28%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,.07),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
            <motion.div initial="hidden" animate="show" variants={reveal}>
              <div className="mono mb-5 text-xs uppercase tracking-[.25em] text-orange-300">AWS CLOUD ENGINEER</div>
              <h1 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">Building <span className="text-gradient">Cloud Solutions</span> with AWS.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">I'm Sudip Paramanik, a B.Tech Computer Science student focused on AWS cloud engineering, serverless architecture, infrastructure as code and practical cloud projects.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-orange-400 px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-orange-300">View Projects <ArrowDown className="ml-2 inline" size={17} /></a>
                <a href={portfolio.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-5 py-3 text-white/80 hover:border-white/25">GitHub <Github className="ml-2 inline" size={17} /></a>
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-5 py-3 text-white/80 hover:border-white/25">LinkedIn <Linkedin className="ml-2 inline" size={17} /></a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs text-white/45"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" /> Open to AWS Cloud Engineering opportunities</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute -inset-5 rounded-[3rem] bg-orange-400/10 blur-3xl" />
              <button onClick={() => setProfileOpen(true)} className="group relative block w-full overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0b1018] p-2 text-left shadow-2xl">
                <div className="relative overflow-hidden rounded-[1.8rem]">
                  <img src={portfolio.profileImage} alt="Sudip Paramanik" className="h-[500px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 pt-24">
                    <div className="flex items-end justify-between gap-4">
                      <div><p className="mono text-[10px] uppercase tracking-[.25em] text-orange-300">PROFILE</p><p className="mt-2 text-xl font-bold">Sudip Paramanik</p><p className="mt-1 text-sm text-white/55">AWS Cloud Engineer</p></div>
                      <span className="rounded-full border border-white/15 bg-black/30 p-3 text-white/70 backdrop-blur transition group-hover:text-orange-300"><ZoomIn size={18} /></span>
                    </div>
                  </div>
                </div>
              </button>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-[#0b1018]/90 px-4 py-3 shadow-xl backdrop-blur"><p className="mono text-[10px] text-white/35">FOCUS</p><p className="mt-1 text-sm font-semibold">AWS • Java • Serverless</p></div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[.015]"><div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-5 py-5 text-sm text-white/55">{["AWS", "Java", "Terraform", "Docker", "Serverless", "Linux", "Git", "CI/CD"].map(x => <span key={x} className="shrink-0 rounded-full border border-white/8 px-4 py-2 mono">{x}</span>)}</div></section>

        <section id="about" className="px-5 py-28">
          <motion.div whileInView="show" viewport={{ once: true, amount: .2 }} initial="hidden" variants={reveal} className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div><p className="mono text-xs uppercase tracking-[.25em] text-orange-300">01 / ABOUT</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Cloud-focused. <span className="text-white/40">Hands-on.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">I enjoy turning cloud concepts into working systems. My current focus is AWS, Java, Terraform, serverless applications and cloud architecture, with projects that use real AWS services rather than only tutorials.</p></div>
            <div className="card rounded-3xl p-7"><div className="mono text-xs text-white/35">CURRENT DIRECTION</div><div className="mt-5 space-y-5">{["AWS Cloud Engineering", "Infrastructure as Code", "Serverless Architecture", "Cloud Monitoring"].map((x, i) => <div className="flex gap-4" key={x}><span className="mono text-orange-300">0{i + 1}</span><span>{x}</span></div>)}</div></div>
          </motion.div>
        </section>

        <section id="skills" className="grid-bg px-5 py-28"><div className="mx-auto max-w-6xl"><p className="mono text-xs uppercase tracking-[.25em] text-orange-300">02 / CLOUD STACK</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Tools I build with.</h2><div className="mt-10 grid gap-5 md:grid-cols-3"><SkillCard title="AWS SERVICES" items={portfolio.skills.aws} /><SkillCard title="DEVOPS / INFRA" items={portfolio.skills.devops} /><SkillCard title="LANGUAGES" items={portfolio.skills.languages} /></div></div></section>

        <section className="px-5 py-28"><div className="mx-auto max-w-6xl"><p className="mono text-xs uppercase tracking-[.25em] text-orange-300">03 / ARCHITECTURE</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">How I think about AWS.</h2><div className="card mt-10 rounded-3xl p-6 sm:p-10"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><Architecture /><div><p className="text-lg leading-8 text-white/55">I focus on understanding how AWS services connect together: networking, compute, storage, identity, messaging and observability.</p><div className="mt-7 space-y-4">{["Least-privilege IAM", "Serverless-first where practical", "Infrastructure as Code with Terraform/CDK", "Monitoring with CloudWatch and X-Ray"].map(x => <div className="flex gap-3 text-white/70" key={x}><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />{x}</div>)}</div></div></div></div></div></section>

        <section id="projects" className="grid-bg px-5 py-28"><div className="mx-auto max-w-6xl"><p className="mono text-xs uppercase tracking-[.25em] text-orange-300">04 / PROJECTS</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Things I've built.</h2><div className="mt-10 space-y-5">{portfolio.projects.map(p => <motion.article whileHover={{ y: -4 }} transition={{ duration: .2 }} key={p.title} className="card rounded-3xl p-6 sm:p-8"><div className="grid gap-8 lg:grid-cols-[1fr_auto]"><div><div className="mono text-xs text-orange-300">{p.label}</div><h3 className="mt-3 text-2xl font-bold sm:text-3xl">{p.title}</h3><p className="mt-4 max-w-3xl leading-7 text-white/50">{p.description}</p><div className="mt-6 flex flex-wrap gap-2">{p.tech.map(t => <span className="rounded-lg bg-white/[.04] px-3 py-1.5 text-xs text-white/60" key={t}>{t}</span>)}</div></div><div className="flex items-start gap-2"><a href={p.github} target="_blank" rel="noreferrer" aria-label={"GitHub: " + p.title} className="rounded-xl border border-white/10 p-3 hover:border-orange-300/40"><Github size={18} /></a>{p.demo !== "#" && <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 hover:border-orange-300/40"><ExternalLink size={18} /></a>}</div></div></motion.article>)}</div></div></section>

        <section id="experience" className="px-5 py-28"><div className="mx-auto max-w-6xl"><p className="mono text-xs uppercase tracking-[.25em] text-orange-300">05 / EXPERIENCE</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Internship experience.</h2><div className="mt-10 space-y-7">{portfolio.experience.map((item, index) => <motion.article whileInView="show" viewport={{ once: true, amount: .2 }} initial="hidden" variants={reveal} key={item.company} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111824] to-[#080c12] p-6 sm:p-9"><div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" /><div className="relative grid gap-8 lg:grid-cols-[.72fr_1.28fr]"><div><div className="inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-300/5 px-3 py-1.5 text-xs text-orange-200"><BriefcaseBusiness size={14} /> {item.type}</div><h3 className="mt-5 text-2xl font-bold sm:text-3xl">{item.role}</h3><p className="mt-2 text-lg text-white/65">{item.company}</p><div className="mt-5 flex items-center gap-2 text-sm text-white/40"><CalendarDays size={16} /> {item.period}</div><a href={item.document} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/70 hover:border-orange-300/40 hover:text-white"><FileText size={16} /> View offer letter</a></div><div><p className="leading-8 text-white/55">{item.description}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{item.highlights.map((h, i) => <div key={h} className="rounded-2xl border border-white/8 bg-white/[.025] p-4"><span className="mono text-xs text-orange-300">0{i + 1}</span><p className="mt-2 text-sm leading-6 text-white/70">{h}</p></div>)}</div></div></div></motion.article>)}</div></div></section>

        <section id="certificates" className="grid-bg px-5 py-28"><div className="mx-auto max-w-6xl"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mono text-xs uppercase tracking-[.25em] text-orange-300">06 / CERTIFICATES</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Proof of learning.</h2></div><p className="max-w-md text-sm leading-6 text-white/40">Tap any certificate to preview it, then open the original PDF.</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{portfolio.certificates.map((certificate, i) => <motion.button key={certificate.title} onClick={() => setSelectedCertificate(certificate)} whileHover={{ y: -5 }} transition={{ duration: .2 }} className="card group overflow-hidden rounded-3xl text-left"><div className="relative aspect-[1.42/1] overflow-hidden bg-white"><img src={certificate.image} alt={certificate.title} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" /><span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/45 p-2.5 text-white backdrop-blur"><ZoomIn size={16} /></span></div><div className="p-5"><div className="flex items-center justify-between gap-3"><span className="mono text-[10px] uppercase tracking-[.18em] text-orange-300">0{i + 1} / {certificate.issuer}</span><Award size={16} className="text-white/35" /></div><h3 className="mt-3 min-h-[56px] text-lg font-semibold leading-7">{certificate.title}</h3><div className="mt-4 flex items-center justify-between text-xs text-white/40"><span>{certificate.date}</span><span className="group-hover:text-orange-300">View certificate →</span></div></div></motion.button>)}</div></div></section>

        <section id="journey" className="px-5 py-28"><div className="mx-auto max-w-6xl"><p className="mono text-xs uppercase tracking-[.25em] text-orange-300">07 / JOURNEY</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Learning → building → growing.</h2><div className="mt-10 border-l border-white/10 pl-7">{[["B.Tech CSE", "4th year / 7th semester"], ["AWS & Cloud", "Hands-on learning across core AWS services"], ["Infrastructure", "Terraform, Docker and CI/CD practice"], ["Projects", "Serverless and cloud-based applications"]].map((x, i) => <div className="relative mb-10" key={x[0]}><span className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-orange-400 bg-[#05070b]" /><div className="mono text-xs text-orange-300">0{i + 1}</div><h3 className="mt-2 text-xl font-semibold">{x[0]}</h3><p className="mt-2 text-white/45">{x[1]}</p></div>)}</div></div></section>

        <section id="contact" className="grid-bg px-5 py-28"><div className="mx-auto max-w-4xl text-center"><p className="mono text-xs uppercase tracking-[.25em] text-orange-300">08 / CONTACT</p><h2 className="mt-4 text-5xl font-extrabold sm:text-7xl">Let's build on the cloud.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">I'm exploring AWS Cloud Engineering internships and entry-level opportunities. If you're building something interesting, let's connect.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href={"mailto:" + portfolio.email} className="rounded-xl bg-orange-400 px-5 py-3 font-semibold text-black">Email Me <Mail className="ml-2 inline" size={17} /></a><a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-5 py-3 text-white/75">LinkedIn <ArrowUpRight className="ml-2 inline" size={17} /></a></div></div></section>
      </main>

      <footer className="border-t border-white/5 px-5 py-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-white/35 sm:flex-row"><span>© 2026 Sudip Paramanik</span><span className="mono">AWS • JAVA • CLOUD • SERVERLESS</span></div></footer>
      {profileOpen && <ProfileModal onClose={() => setProfileOpen(false)} />}
      {selectedCertificate && <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />}
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return <div className="card rounded-3xl p-6"><div className="mono text-xs text-white/40">{title}</div><div className="mt-5 flex flex-wrap gap-2">{items.map(s => <span className="rounded-lg border border-white/8 bg-white/[.02] px-3 py-2 text-sm text-white/75" key={s}>{s}</span>)}</div></div>;
}

export default App;
