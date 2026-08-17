import "./index.css";

function App() {
  return (
    <>
      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="nav">
        <a href="#top" className="logo">
          A
        </a>

        <div className="nav-links">
          <a href="#story">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#project">PROJECT</a>
          <a href="#connect">CONTACT</a>
        </div>

        <div className="status">
          <span></span>
          AVAILABLE
        </div>
      </nav>


      <main id="top">

        {/* =========================
            HERO
        ========================= */}

        <section className="hero">

          <div className="hero-content">

            <p className="small-text">
              PORTFOLIO / ATHMANADHAN / 2026
            </p>

            <h1>
              ATHMA
              <br />
              <span>NADHAN</span>
            </h1>

            <div className="tags">
              <span>CREATOR</span>
              <span>STUDENT</span>
              <span>BUILDER</span>
            </div>

            <p className="intro">
              Student and aspiring technology professional focused on
              building digital experiences, learning modern technology,
              and turning ideas into meaningful projects.
            </p>

          </div>


          {/* HERO PHOTO */}

          <div className="hero-photo">
            <img
              src="/images/athmanadhan.jpg"
              alt="Athmanadhan"
            />

            <span className="photo-label">
              ATHMANADHAN / 01
            </span>
          </div>


          <div className="sticker">
            BUILD / LEARN / CREATE
          </div>

        </section>


        {/* =========================
            ABOUT
        ========================= */}

        <section className="story" id="story">

          <p className="section-label">
            01 / ABOUT
          </p>

          <h2>
            WHO <span>I AM.</span>
          </h2>


          <div className="about-layout">

            <article className="story-article">

              <p className="article-lead">
                I’m Athmanadhan — a student, creator and builder
                with a growing interest in technology, web development,
                design and digital experiences.
              </p>

              <p>
                I enjoy understanding how technology works and,
                more importantly, using it to create something real.
                My approach is practical: learn a concept, experiment
                with it, build something from it, and continue improving.
              </p>

              <p>
                I’m particularly interested in the intersection of
                development and creativity. I like building interfaces,
                exploring ideas, solving problems and finding better
                ways to turn an initial concept into a working product.
              </p>

              <p>
                I believe every project is an opportunity to become
                better at thinking, designing and building. Rather than
                simply collecting technologies, I want to understand
                how they can be combined to create useful and memorable
                digital experiences.
              </p>


              <div className="article-highlight">

                <span>MY APPROACH</span>

                <p>
                  Learn something.
                  <br />
                  Build something.
                  <br />
                  Make it better.
                </p>

              </div>


              <p>
                At the moment, I’m continuing to develop my technical
                foundation while building projects that allow me to
                apply what I learn. My portfolio represents that
                process — the skills I’m developing, the work I’m
                creating and the direction I’m moving toward.
              </p>

            </article>


            {/* ABOUT IMAGE */}

            <div className="about-photo">

              <img
                src="/images/about.jpg"
                alt="Athmanadhan"
              />

              <div className="about-photo-label">
                <span>01</span>
                <span>CREATIVE / TECH</span>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================= */}

        <section className="skills" id="skills">

          <p className="section-label">
            02 / SKILLS
          </p>

          <div className="skills-header">

            <h2>
              WHAT I
              <br />
              <span>WORK WITH.</span>
            </h2>

            <p>
              Technologies, tools and areas I’m currently learning
              and developing through practical projects.
            </p>

          </div>


          <div className="skills-grid">

            <div className="skill-card">
              <span>01</span>

              <h3>PROGRAMMING</h3>

              <p>
                Building strong programming fundamentals,
                logical thinking and problem-solving skills.
              </p>
            </div>


            <div className="skill-card">
              <span>02</span>

              <h3>WEB DEVELOPMENT</h3>

              <p>
                Creating responsive and interactive websites
                with modern web technologies.
              </p>
            </div>


            <div className="skill-card">
              <span>03</span>

              <h3>UI / DESIGN</h3>

              <p>
                Exploring clean interfaces, visual hierarchy
                and creative digital experiences.
              </p>
            </div>


            <div className="skill-card">
              <span>04</span>

              <h3>TOOLS & WORKFLOW</h3>

              <p>
                Working with VS Code, GitHub and modern
                development workflows.
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            MY WORLD PROJECT
        ========================= */}

        <section className="project" id="project">

          <p className="section-label">
            03 / FEATURED PROJECT
          </p>

          <h2>
            MY <span>WORLD.</span>
          </h2>


          <div className="project-layout">

            {/* PROJECT IMAGE */}

            <div className="project-image">

              <img
                src="/images/my-world.jpg"
                alt="My World project"
              />

              <div className="project-image-number">
                01
              </div>

            </div>


            {/* PROJECT ARTICLE */}

            <article className="project-info">

              <p className="project-kicker">
                ONGOING PERSONAL PROJECT
              </p>

              <h3>
                A digital world built around
                <span> ideas, technology and creativity.</span>
              </h3>

              <p className="project-description">
                My World is my ongoing personal web project.
                It is an evolving digital experience where I bring
                together development, design, interaction and
                experimentation in one project.
              </p>

              <p className="project-description">
                Instead of treating it as a simple website,
                I’m developing it as a space where different
                ideas can come together. The project gives me
                an opportunity to experiment with interfaces,
                animations, layouts and modern web technologies
                while continuously improving my development skills.
              </p>

              <p className="project-description">
                The project is still evolving. Each iteration
                gives me a chance to learn something new, test
                different approaches and turn an idea into a
                more complete digital experience.
              </p>


              <div className="project-meta">

                <div>
                  <span>PROJECT</span>
                  <strong>MY WORLD</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>ONGOING</strong>
                </div>

                <div>
                  <span>TYPE</span>
                  <strong>WEB EXPERIENCE</strong>
                </div>

              </div>


              {/* EMPTY FOR NOW */}

              <a
                href="#"
                className="project-button"
              >
                EXPLORE MY WORLD
              </a>

            </article>

          </div>

        </section>


        {/* =========================
            CONNECTIONS
        ========================= */}

        <section className="connect" id="connect">

          <p className="section-label">
            04 / CONNECTIONS
          </p>

          <h2>
            LET'S <span>CONNECT.</span>
          </h2>


          <div className="connect-grid">

            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/king_of_souls_03?igsh=MTJyZGlkenF3b24yZg=="
              className="connect-card"
              target="_blank"
              rel="noreferrer"
            >

              <div className="connect-icon instagram-icon">

                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>

              </div>

              <div className="connect-content">

                <span className="connect-label">
                  INSTAGRAM
                </span>

                <strong>
                  @king_of_souls_03
                </strong>

              </div>

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/Athmanadhan"
              className="connect-card"
              target="_blank"
              rel="noreferrer"
            >

              <div className="connect-icon github-icon">

                <svg viewBox="0 0 24 24" fill="currentColor">

                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.76.84 1.22 1.91 1.22 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />

                </svg>

              </div>

              <div className="connect-content">

                <span className="connect-label">
                  GITHUB
                </span>

                <strong>
                  Athmanadhan
                </strong>

              </div>

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/athma-nadhan-767157429"
              className="connect-card"
              target="_blank"
              rel="noreferrer"
            >

              <div className="connect-icon linkedin-icon">

                <svg viewBox="0 0 24 24" fill="currentColor">

                  <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.45v1.57h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.55v6.25h-3.6v-5.54c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.92v5.64H9.2V9Z" />

                </svg>

              </div>

              <div className="connect-content">

                <span className="connect-label">
                  LINKEDIN
                </span>

                <strong>
                  Athma Nadhan
                </strong>

              </div>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:athmasankar2009@gmail.com"
              className="connect-card"
            >

              <div className="connect-icon email-icon">

                <svg viewBox="0 0 24 24" fill="none">

                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                </svg>

              </div>

              <div className="connect-content">

                <span className="connect-label">
                  EMAIL
                </span>

                <strong>
                  athmasankar2009@gmail.com
                </strong>

              </div>

            </a>


            {/* PHONE */}

            <a
              href="tel:+917639473832"
              className="connect-card"
            >

              <div className="connect-icon phone-icon">

                <svg viewBox="0 0 24 24" fill="none">

                  <path
                    d="M6.5 3.5 9 3l2 5-2 1.5c1 2 2.5 3.5 4.5 4.5L15 12l5 2-.5 2.5c-.3 1.5-1.6 2.5-3.1 2.5C10.3 19 5 13.7 5 7.6 5 6.1 5.1 4.8 6.5 3.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                </svg>

              </div>

              <div className="connect-content">

                <span className="connect-label">
                  PHONE
                </span>

                <strong>
                  +91 76394 73832
                </strong>

              </div>

            </a>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <div className="footer-name">
          ATHMANADHAN
        </div>

        <p>
          © 2026 ATHMANADHAN — BUILT WITH CURIOSITY.
        </p>

      </footer>

    </>
  );
}

export default App;