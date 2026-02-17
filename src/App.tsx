const links = {
  email: "mailto:frank690@sffresch.de",
  github: "https://github.com/frank690",
  linkedin: "https://www.linkedin.com/in/frank-eschner-a3a00a163/"
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M2.8 11.6 20.9 3c.6-.3 1.2.3 1 1l-4.4 17.1c-.2.7-1 .9-1.5.4l-4.9-4.5-2.8 2.8c-.4.4-1 .1-1.1-.4l-.9-6.4-3.8-1.8c-.7-.3-.7-1.3 0-1.6Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.8-.25.8-.56v-1.95c-3.25.7-3.93-1.37-3.93-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.6-.3-5.33-1.3-5.33-5.77 0-1.27.46-2.32 1.2-3.14-.12-.3-.52-1.53.12-3.2 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.83 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.67.24 2.9.12 3.2.74.82 1.2 1.87 1.2 3.14 0 4.48-2.73 5.47-5.34 5.77.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.5 8.75A1.75 1.75 0 1 0 5.5 5.25a1.75 1.75 0 0 0 0 3.5ZM4 10h3v10H4V10Zm5 0h2.87v1.42h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62V20h-3v-4.88c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.26-1.87 2.58V20H9V10Z" />
    </svg>
  );
}

function App() {
  return (
    <main className="site-shell" aria-labelledby="title">
      <div className="stack">
        <section className="hero-card">
          <div className="hero-main">
            <div className="copy">
              <p className="kicker">Frank Eschner</p>
              <h1 id="title">Building practical systems to solve problems, automate work, and enjoy the process</h1>
              <p className="subtitle">
                Hi, I am Frank. I enjoy turning ideas into practical tools, from data and
                software projects to hands-on hardware builds.
              </p>
            </div>
          </div>
          <img
            className="hero-avatar"
            src="/frank-avatar.png"
            alt="Portrait of Frank Eschner"
            width={280}
            height={360}
          />
        </section>

        <section className="mid-card" aria-label="Experience summary">
          <div className="company-logos" aria-label="Companies">
            <img className="logo logo-hkm" src="/company-logos/hkm.svg" alt="Huttenwerke Krupp Mannesmann" loading="lazy" />
            <img className="logo logo-telekom" src="/company-logos/deutsche-telekom.svg" alt="Deutsche Telekom" loading="lazy" />
            <img className="logo logo-aldi" src="/company-logos/aldi-nord.svg" alt="ALDI Nord" loading="lazy" />
            <img className="logo logo-lemken" src="/company-logos/lemken.svg" alt="LEMKEN" loading="lazy" />
            <img className="logo logo-ukd" src="/company-logos/ukd-neuro.svg" alt="University Clinic Dusseldorf Neuro-Oncology" loading="lazy" />
            <img className="logo logo-sms" src="/company-logos/sms-group.svg" alt="SMS group" loading="lazy" />
          </div>
          <p>
            I have most of my experience in the steel industry and currently lead
            digitalization projects at the great Huettenwerke Krupp Mannesmann in
            Duisburg. Before that, I worked in fields like retail, agriculture,
            medicine, and IT security as a data scientist, engineer, or software
            developer, always trying to improve on the status quo and deliver great
            solutions.
          </p>
        </section>

        <section className="contact-card" aria-label="Contact">
          <div className="contact-row">
            <p className="contact-copy">
              Want to get in touch? Need help or advice on projects?<br/>Reach out via the
              following channels.
            </p>
            <nav className="links" aria-label="Contact links">
              <a href={links.email} aria-label="Send email" title="Email">
                <MailIcon />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" title="GitHub">
                <GitHubIcon />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" title="LinkedIn">
                <LinkedInIcon />
              </a>
            </nav>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
