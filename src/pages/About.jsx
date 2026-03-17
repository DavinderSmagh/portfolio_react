import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />

      <section style={{ paddingTop: '140px' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            About Me
          </h1>

          <div style={{ width: '100%', fontSize: '1.18rem', color: 'var(--text-light)' }} >
            <p style={{ marginBottom: '1.8rem' }}>
              Hi, I’m Davinder Singh — a passionate <strong>Full-Stack Developer and QA Professional</strong> based in India.
            </p>

            <p style={{ marginBottom: '1.8rem' }}>
              Currently, I leverage a unique blend of development and quality engineering to build and ship high-quality software. I have hands-on experience in Manual and Automation testing for both mobile and web applications using Appium, ensuring seamless user experiences across all platforms.

              My technical toolkit extends beyond testing; I am proficient in API testing, managing MongoDB databases, and navigating cloud environments like DigitalOcean to monitor runtime logs and server health. With a solid foundation in the JavaScript ecosystem (React, Node.js) and Java/Spring Boot, I bridge the gap between writing code and ensuring it performs at scale.

              I am fluent in modern CI/CD workflows, including GitHub version control (branching, PRs, and repository management), and I thrive on creating digital experiences that are as stable as they are innovative.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              Currently focused on creating delightful digital experiences and continuously learning new technologies.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '40px' }}>

              {/* Skill Category Mapper - You can copy this structure */}
              {[
                { title: "Frontend", skills: ["React", "JavaScript", "Flutter"] },
                { title: "Backend", skills: ["Node.js", "Express", "Java", "Spring Boot"] },
                { title: "Database", skills: ["MySQL", "MongoDB"] },
                { title: "QA & Automation", skills: ["Appium (Mobile/Web)", "Manual Testing", "API Testing", "Postman", "Automation"] },
                { title: "DevOps & Tools", skills: ["DigitalOcean (Logs)", "GitHub (Git Flow)", "Linux"] }
              ].map((category) => (
                <div key={category.title}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '12px', color: 'var(--text-main)' }}>
                    {category.title}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: '6px 14px',
                          backgroundColor: 'rgba(0, 0, 0, 0.05)', // Light grey or use a theme color
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          color: 'var(--text-light)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}