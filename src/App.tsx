import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Cloud, Server, Database, Boxes, ExternalLink, Award, BriefcaseBusiness,
  CalendarDays, FileText, ZoomIn, ShieldCheck, Workflow, Code2, Activity
} from "lucide-react";
import { useState } from "react";
import { portfolio } from "./data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

type Certificate = (typeof portfolio.certificates)[number];

function Workstation() {
  return (
    <div className="workstation" aria-label="Illustrated cloud engineer workstation">
      <div className="scene-glow" />
      <div className="scene-orbit orbit-a" />
      <div className="scene-orbit orbit-b" />
      <div className="aws-cloud"><Cloud size={38} /><strong>aws</strong><small>CLOUD</small></div>
      <div className="floating-node node-a"><ShieldCheck size={18}/><span>SECURE</span></div>
      <div className="floating-node node-b"><Activity size={18}/><span>MONITOR</span></div>
      <div className="desk">
        <div className="screen-frame">
          <div className="screen-bar"><i/><i/><i/><span>cloud-infrastructure.ts</span></div>
          <div className="screen-code">
            <p><b>const</b> cloud = {"{"}</p>
            <p>&nbsp; provider: <em>"aws"</em>,</p>
            <p>&nbsp; region: <em>"ap-south-1"</em>,</p>
            <p>&nbsp; secure: <strong>true</strong>,</p>
            <p>&nbsp; scalable: <strong>true</strong></p>
            <p>{"}"}</p>
            <p className="terminal-ok">✓ Infrastructure ready</p>
          </div>
        </div>
        <div className="screen-stand"/>
        <div className="keyboard"/>
        <div className="mouse"/>
        <div className="pc-tower"><i/><i/><i/></div>
        <div className="plant"><i/><i/><i/><b/></div>
        <div className="coffee">aws<span>☁</span></div>
      </div>
      <div className="scene-caption">DESIGN · AUTOMATE · DEPLOY</div>
    </div>
  );
}

function Architecture() {
  const nodes = [
    { icon: <Cloud size={19}/>, label: "API Gateway" },
    { icon: <Server size={19}/>, label: "Lambda" },
    { icon: <Database size={19}/>, label: "DynamoDB" },
    { icon: <Boxes size={19}/>, label: "S3 / Storage" }
  ];
  return (
    <div className="architecture-visual">
      <div className="architecture-halo"/>
      <div className="arch-internet">INTERNET</div>
      <div className="arch-connector"/>
      {nodes.map((node, i) => (
        <div className={`arch-node arch-node-${i + 1}`} key={node.label}>
          <span>{node.icon}</span><b>{node.label}</b>
          {i < nodes.length - 1 && <ArrowDown className="arch-down" size={14}/>}
        </div>
      ))}
      <motion.div className="data-pulse" animate={{ y: [0, 70, 140, 210], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}/>
      <div className="arch-foot">CLOUDWATCH&nbsp; · &nbsp;SQS&nbsp; · &nbsp;SNS</div>
    </div>
  );
}

function CertificateModal({ certificate, onClose }: { certificate: Certificate; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: .96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} onClick={(e) => e.stopPropagation()} className="certificate-modal">
        <div className="modal-head">
          <div><p>{certificate.title}</p><small>{certificate.issuer} · {certificate.date}</small></div>
          <button onClick={onClose} aria-label="Close certificate"><X size={18}/></button>
        </div>
        <div className="certificate-preview"><img src={certificate.image} alt={certificate.title}/></div>
        <div className="modal-foot"><a href={certificate.file} target="_blank" rel="noreferrer">Open PDF <ArrowUpRight size={15}/></a></div>
      </motion.div>
    </div>
  );
}

function ProfileModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()} className="profile-modal">
        <button onClick={onClose} aria-label="Close profile photo" className="profile-close"><X size={18}/></button>
        <img src={portfolio.profileImage} alt="Sudip Paramanik"/>
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
    <div className="portfolio-shell">
      <header className="site-header">
        <nav className="site-nav">
          <a href="#top" className="brand"><span className="brand-mark">SP</span><span>Sudip Paramanik</span></a>
          <div className="desktop-nav">
            {nav.map(n => <a key={n} href={"#" + n.toLowerCase()}>{n}</a>)}
          </div>
          <a className="nav-resume" href={portfolio.resume !== "#" ? portfolio.resume : "#contact"}>{portfolio.resume !== "#" ? <FileText size={14}/> : <Mail size={14}/>} {portfolio.resume !== "#" ? "Resume" : "Contact"}</a>
          <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        </nav>
        {open && <div className="mobile-nav">{nav.map(n => <a onClick={() => setOpen(false)} key={n} href={"#" + n.toLowerCase()}>{n}</a>)}</div>}
      </header>

      <main id="top">
        <section className="hero-section grid-bg">
          <div className="hero-inner">
            <motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
              <div className="eyebrow"><span className="live-dot"/> AWS CLOUD ENGINEER <i>·</i> CLOUD & DEVOPS</div>
              <h1>Building the cloud.<br/><span>Engineering what's next.</span></h1>
              <p className="hero-intro">Hello, I'm <strong>{portfolio.name}</strong> — a <b>{portfolio.role}</b> focused on secure infrastructure, serverless architecture, and automation.</p>
              <p className="hero-description">I turn cloud concepts into practical projects using AWS, Terraform, Java, and modern DevOps tools.</p>
              <div className="hero-buttons">
                <a className="btn btn-primary" href="#projects">Explore Projects <ArrowUpRight size={17}/></a>
                <a className="btn btn-secondary" href={portfolio.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
                <a className="btn btn-secondary" href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              </div>
              <div className="availability"><span/> Open to entry-level AWS Cloud Engineering opportunities</div>
              <div className="hero-tech"><span><Cloud/> AWS</span><span><Workflow/> Terraform</span><span><Boxes/> Docker</span><span><Code2/> Java</span></div>
            </motion.div>
            <motion.div className="hero-art" initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .12 }}>
              <Workstation/>
            </motion.div>
          </div>
          <a className="scroll-hint" href="#about"><ArrowDown size={14}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="ticker"><div>{["AWS CLOUD", "JAVA", "TERRAFORM", "DOCKER", "SERVERLESS", "LINUX", "GIT & CI/CD"].map(x => <span key={x}>{x}<i>✦</i></span>)}</div></section>

       <section id="about" className="section about-section">
  <motion.div
    className="section-grid"
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="about-profile">
      <img
        className="about-profile-image"
        src={portfolio.profileImage}
        alt="Sudip Paramanik"
      />
    </div>

    <div className="about-heading">
      <p className="section-kicker">01 / ABOUT ME</p>
      <h2>
        Cloud-minded.
        <br />
        <span>Engineering-focused.</span>
      </h2>
    </div>

    <div className="about-copy">
      <p>
        I'm a B.Tech Computer Science & Engineering student at
        Mallabhum Institute of Technology, West Bengal. I enjoy
        turning technical concepts into practical cloud projects
        and learning how systems are deployed, secured, monitored,
        and scaled.
      </p>

      <div className="about-facts">
        <div>
          <b>2023—2027</b>
          <small>B.Tech CSE</small>
        </div>
        <div>
          <b>AWS + IaC</b>
          <small>Core focus</small>
        </div>
        <div>
          <b>Build & learn</b>
          <small>Every day</small>
        </div>
      </div>
    </div>
  </motion.div>
</section>

        <section id="skills" className="section section-tinted grid-bg">
          <div className="section-heading"><div><p className="section-kicker">02 / TOOLKIT</p><h2>Technical <span>arsenal.</span></h2></div><p>Tools and technologies I use to build, automate, and understand cloud systems.</p></div>
          <div className="skill-grid">
            <SkillCard icon={<Cloud/>} title="AWS SERVICES" items={portfolio.skills.aws}/>
            <SkillCard icon={<Workflow/>} title="DEVOPS / INFRA" items={portfolio.skills.devops}/>
            <SkillCard icon={<Code2/>} title="PROGRAMMING" items={portfolio.skills.languages}/>
          </div>
        </section>

        <section className="section architecture-section">
          <div className="section-heading"><div><p className="section-kicker">03 / SYSTEM DESIGN</p><h2>How I think about <span>AWS.</span></h2></div><p>Visualizing how cloud services connect to create secure, scalable systems.</p></div>
          <div className="architecture-panel">
            <Architecture/>
            <div className="architecture-copy"><p className="mini-label">CLOUD ARCHITECTURE</p><h3>Services work better<br/>when they work together.</h3><p>I focus on networking, compute, storage, identity, messaging, and observability—and how those pieces fit together in a real solution.</p>
              {["Least-privilege IAM", "Infrastructure as Code with Terraform / CDK", "Monitoring with CloudWatch and X-Ray"].map(x => <div className="check-row" key={x}><ShieldCheck size={16}/>{x}</div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-tinted grid-bg">
          <div className="section-heading"><div><p className="section-kicker">04 / SELECTED WORK</p><h2>Projects with <span>purpose.</span></h2></div><p>Hands-on learning through cloud architecture, automation, and application development.</p></div>
          <div className="project-grid">
            {portfolio.projects.map((p, index) => <motion.article whileInView="show" initial="hidden" viewport={{ once: true, amount: .12 }} variants={reveal} transition={{ delay: index * .07 }} key={p.title} className="project-card">
              <div className="project-top"><span className="project-index">0{index + 1}</span><span className="project-label">{p.label}</span><a href={p.github} target="_blank" rel="noreferrer" aria-label={"GitHub: " + p.title}><ArrowUpRight size={18}/></a></div>
              <h3>{p.title}</h3><p className="project-description">{p.description}</p>
              <div className="project-visual">
                {(index === 0 ? ["GitHub Actions", "ECR", "ECS Fargate", "ALB"] : index === 1 ? ["EventBridge", "Lambda", "Cost Explorer", "SNS"] : index === 2 ? ["Cognito", "API Gateway", "Lambda", "DynamoDB"] : ["React", "API / Backend", "S3", "AI organize"]).map((node, i, arr) => <div className="project-flow-node" key={node}><span>{i === 0 ? <Workflow/> : i === 1 ? <Code2/> : i === 2 ? <Cloud/> : <Database/>}</span><small>{node}</small>{i < arr.length - 1 && <ArrowRight className="flow-arrow" size={13}/>}</div>)}
              </div>
              <div className="tech-tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
              <div className="project-actions"><a href={p.github} target="_blank" rel="noreferrer"><Github size={15}/> Repository</a>{p.demo && p.demo !== "#" && <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={14}/> Live demo</a>}</div>
            </motion.article>)}
          </div>
          <p className="project-note">Project descriptions should reflect the features you have actually implemented. For projects still in progress, describe planned capabilities as planned.</p>
        </section>

        <section id="experience" className="section">
          <div className="section-heading"><div><p className="section-kicker">05 / EXPERIENCE</p><h2>Learning by <span>building.</span></h2></div><p>Experience and guided hands-on learning in emerging technologies.</p></div>
          <div className="experience-list">{portfolio.experience.map((item, index) => <motion.article whileInView="show" initial="hidden" viewport={{ once: true }} variants={reveal} key={item.company} className="experience-card">
            <div className="experience-logo">IBM<span>SkillsBuild</span></div><div className="experience-content"><div className="experience-meta"><span><BriefcaseBusiness size={14}/>{item.type}</span><span><CalendarDays size={14}/>{item.period}</span></div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p className="experience-description">{item.description}</p><div className="highlight-grid">{item.highlights.map((h, i) => <div key={h}><span>0{i + 1}</span>{h}</div>)}</div><a className="text-link" href={item.document} target="_blank" rel="noreferrer"><FileText size={15}/> View offer letter <ArrowUpRight size={14}/></a></div>
          </motion.article>)}</div>
        </section>

        <section id="certificates" className="section section-tinted grid-bg">
          <div className="section-heading"><div><p className="section-kicker">06 / CERTIFICATES</p><h2>Proof of <span>learning.</span></h2></div><p>Select a certificate to preview the image, then open its PDF.</p></div>
          <div className="certificate-grid">{portfolio.certificates.map((certificate, i) => <motion.button key={certificate.title} onClick={() => setSelectedCertificate(certificate)} whileHover={{ y: -5 }} className="certificate-card">
            <div className="certificate-image"><img src={certificate.image} alt={certificate.title}/><span><ZoomIn size={16}/></span></div><div className="certificate-info"><div><span className="section-kicker">0{i + 1} / {certificate.issuer}</span><Award size={16}/></div><h3>{certificate.title}</h3><p>{certificate.date}</p></div>
          </motion.button>)}</div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-cloud"><Cloud size={48}/><b>AWS</b></div>
          <div><p className="section-kicker">07 / GET IN TOUCH</p><h2>Let's build something<br/><span>meaningful in the cloud.</span></h2><p className="contact-copy">I'm exploring AWS Cloud Engineering internships and entry-level opportunities. If you're building something interesting, let's connect.</p></div>
          <div className="contact-actions"><a className="btn btn-primary" href={"mailto:" + portfolio.email}><Mail size={16}/> Email me <ArrowUpRight size={15}/></a><div><a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a></div><small>{portfolio.email}</small></div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">SP</span><span>Sudip Paramanik</span></a><span>Designed to show how I think, learn, and build.</span><small>© {new Date().getFullYear()} Sudip Paramanik</small></footer>
      {profileOpen && <ProfileModal onClose={() => setProfileOpen(false)}/>}
      {selectedCertificate && <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)}/>}
    </div>
  );
}

function SkillCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return <motion.article className="skill-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><div className="skill-icon">{icon}</div><h3>{title}</h3><div className="skill-tags">{items.map(s => <span key={s}>{s}</span>)}</div></motion.article>;
}

export default App;
