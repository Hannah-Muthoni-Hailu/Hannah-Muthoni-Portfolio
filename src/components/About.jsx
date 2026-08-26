import React, { useEffect, useRef, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import Me from '../assets/Me.jpg';
import "../styles/About.css";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Python",
  "NextJS",
  "SQL",
  "Fullstack Development",
  "SEO optimization",
  "AI Chatbot integration",
];

const stats = [
  { value: 2, suffix: "+", label: "Years creating" },
  { value: 3, suffix: "", label: "Projects shipped" },
];

function AnimatedStat({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const element = statRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1400;
    const startTime = performance.now();

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <Col xs={12} md={4} className="about-stat">
      <div ref={statRef} className="about-stat-inner">
        <span className="about-stat-index">01</span>

        <div>
          <strong>
            {count}
            {suffix}
          </strong>

          <span>{label}</span>
        </div>
      </div>
    </Col>
  );
}

export default function About() {
  return (
    <section className="about-section">
      <Container fluid className="px-3 px-md-4 px-lg-5">
        <div className="about-intro">
          <p className="about-eyebrow">About Muthoni</p>

          {/* <h2 className="about-heading">
            Designing sites
            <br />
            <span>with intention.</span>
          </h2> */}
        </div>

        <div className="about-layout">
          {/* Portrait */}
          <div className="about-portrait-column">
            <div className="portrait-wrap">
              <img
                src={Me}
                alt="Hannah Muthoni"
                className="about-portrait"
              />

              <div className="portrait-overlay" />
            </div>

            <div className="stat-badge">
              <span className="stat-badge-number">02</span>
              <span className="stat-badge-label">
                years of
                <br />
                experience
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <p className="about-copy">
              <span>Hi there 👋</span> I'm Muthoni. A software developer, CS graduate and lifetime learner.
            </p>

            <p className="about-copy about-copy-muted">
              I'm a relatively introverted girl who found my voice through coding.
              <br />
              <br />
              One of my most fundamental childhood memories was watching my little brother explain bash scripting to me while I stared blankly at the screen.
              He had convinced me he was hacking. I remember feeling some sort of annoyance from my younger brother knowing how to "hack" while I didn't.
              And that annoyance has turned into a lifetime of programming.
              <br />
              <br />
              Recently, I completed my Computer Science degree which technically means I can call myself a "scientist".
              A scientist who uses JavaScript and Python to understand the modern web and build tools that allow other people interact with it.
              I am seeking a full-time, software developer role where the programming skills I have gained can be put into use for a greater good.
            </p>

            <div className="skills">
              <p className="skills-label">Stack and Skills</p>

              <div className="skills-list">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    bg="transparent"
                    className="skill-pill"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
         <Row className="about-stats g-0">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}
