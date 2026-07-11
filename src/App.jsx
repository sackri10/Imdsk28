import { useMemo, useState } from 'react'
import useReveal from './hooks/useReveal.js'
import {
  profile,
  highlights,
  experience,
  projects,
  skills,
  certifications,
  education
} from './data/resume.js'
import articlesData from '../articles.json'
import {
  GitHubIcon,
  MailIcon,
  ArrowUpRight,
  FolderIcon,
  DocIcon,
  AwardIcon,
  PenIcon
} from './components/Icons.jsx'

const NAV_LINKS = [
  ['Highlights', '#highlights'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Articles', '#articles'],
  ['Skills', '#skills'],
  ['Contact', '#contact']
]

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          imdsk28<span>.dev</span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="container hero" id="top">
      <div>
        <div className="hero-kicker">Hi, my name is</div>
        <h1>
          {profile.shortName} <span className="grad">Somesula</span>
        </h1>
        <div className="hero-roles">
          {profile.roles.map((role, i) => (
            <span key={role}>
              {i > 0 && <span className="dot">· </span>}
              {role}
            </span>
          ))}
          <span className="dot">· </span>
          <span>{profile.years}</span>
        </div>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects">
            <FolderIcon size={17} /> See my work
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            <MailIcon size={17} /> Get in touch
          </a>
          <a
            className="btn btn-ghost"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon size={17} /> GitHub
          </a>
        </div>
      </div>
      <div className="hero-photo-wrap">
        <img className="hero-photo" src="/profile.jpg" alt={profile.name} />
        <div className="hero-badge">AZ-204 Certified · {profile.location}</div>
      </div>
    </header>
  )
}

function Highlights() {
  return (
    <section id="highlights" className="container">
      <div className="section-head reveal">
        <span className="index">01.</span>
        <h2>Impact Highlights</h2>
        <p>
          The work I&apos;m most proud of — production agentic AI on top of a decade of
          enterprise .NET engineering.
        </p>
      </div>
      <div className="highlight-grid">
        {highlights.map(h => (
          <article key={h.title} className="highlight-card reveal">
            <div className="highlight-metric">{h.metric}</div>
            <div className="highlight-metric-label">{h.metricLabel}</div>
            <h3>{h.title}</h3>
            <p>{h.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExperienceItem({ job }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? job.bullets : job.bullets.slice(0, 4)
  const hasMore = job.bullets.length > 4

  return (
    <div className="exp-item reveal">
      <div className="exp-head">
        <h3>{job.role}</h3>
        <span className="exp-company">@ {job.company}</span>
        <span className="exp-period">
          {job.period} · {job.location}
        </span>
      </div>
      <p className="exp-project">{job.project}</p>
      <div className="exp-stack">
        {job.stack.map(tech => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
      <ul className="exp-bullets">
        {shown.map(bullet => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {hasMore && (
        <button className="exp-toggle" onClick={() => setExpanded(v => !v)}>
          {expanded ? '− show less' : `+ ${job.bullets.length - 4} more`}
        </button>
      )}
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className="container">
      <div className="section-head reveal">
        <span className="index">02.</span>
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="timeline">
        {experience.map(job => (
          <ExperienceItem key={job.company} job={job} />
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="container">
      <div className="section-head reveal">
        <span className="index">03.</span>
        <h2>Things I&apos;ve Built</h2>
        <p>
          Open-source deep dives into agentic AI — each one built to answer a question
          the docs couldn&apos;t.
        </p>
      </div>
      <div className="project-grid">
        {projects.map(project => (
          <a
            key={project.name}
            className="project-card reveal"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-top">
              <FolderIcon />
              <ArrowUpRight />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Articles() {
  const articles = articlesData.articles
  const types = useMemo(
    () => ['All', ...new Set(articles.map(a => a.type))],
    [articles]
  )
  const [filter, setFilter] = useState('All')
  const filtered =
    filter === 'All' ? articles : articles.filter(a => a.type === filter)

  return (
    <section id="articles" className="container">
      <div className="section-head reveal">
        <span className="index">04.</span>
        <h2>Writing</h2>
        <p>
          {articles.length} published articles on Substack and C# Corner — agentic AI,
          systems design, and .NET.
        </p>
      </div>
      <div className="article-filters reveal">
        {types.map(type => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? 'active' : ''}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="article-grid">
        {filtered.map(article => (
          <a
            key={article.id}
            className="article-card reveal visible"
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="article-icon">
              <DocIcon />
            </div>
            <div>
              <span className="article-type">{article.type}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="container">
      <div className="section-head reveal">
        <span className="index">05.</span>
        <h2>Skills &amp; Tools</h2>
      </div>
      <div className="skills-grid">
        {skills.map(group => (
          <div key={group.group} className="skill-card reveal">
            <h3>{group.group}</h3>
            <div className="chips">
              {group.items.map(item => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="container">
      <div className="section-head reveal">
        <span className="index">06.</span>
        <h2>Certifications &amp; Education</h2>
      </div>
      <div className="cert-grid">
        {certifications.map(cert => (
          <div key={cert.name} className="cert-card reveal">
            <div className="cert-badge">
              <AwardIcon />
            </div>
            <div>
              <h3>{cert.name}</h3>
              <p>
                {cert.issuer}
                {cert.note ? ` · ${cert.note}` : ''}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="edu-note reveal">
        <strong>{education.degree}</strong> — {education.school} ({education.period}) ·{' '}
        {education.score}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="container contact">
      <div className="reveal">
        <span className="index" style={{ fontFamily: 'var(--mono)', color: 'var(--accent)' }}>
          07. What&apos;s next?
        </span>
        <h2>Let&apos;s Build Something</h2>
        <p>
          Whether it&apos;s a production agent system, an enterprise .NET platform, or
          just a conversation about MCP internals — my inbox is open.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <MailIcon size={17} /> {profile.email}
          </a>
          <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">
            <GitHubIcon size={17} /> GitHub
          </a>
          <a className="btn btn-ghost" href={profile.links.substack} target="_blank" rel="noreferrer">
            <PenIcon size={17} /> Substack
          </a>
          <a className="btn btn-ghost" href={profile.links.csharpcorner} target="_blank" rel="noreferrer">
            <DocIcon size={17} /> C# Corner
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <div className="bg-mesh" />
      <div className="bg-grid" />
      <Nav />
      <Hero />
      <main>
        <Highlights />
        <Experience />
        <Projects />
        <Articles />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer>
        Designed &amp; built by {profile.shortName} · © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
