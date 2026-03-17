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
          
          <div style={{ maxWidth: '720px', fontSize: '1.18rem', color: 'var(--text-light)' }}>
            <p style={{ marginBottom: '1.8rem' }}>
              Hi, I'm Davinder Singh — a passionate <strong>Full-Stack Developer</strong> based in India.
            </p>
            
            <p style={{ marginBottom: '1.8rem' }}>
              I enjoy building clean, performant, and user-friendly web applications using modern JavaScript ecosystems (React, Node.js), Java, MySQL, and everything in between.
            </p>
            
            <p style={{ marginBottom: '2.5rem' }}>
              Currently focused on creating delightful digital experiences and continuously learning new technologies.
            </p>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div>
                <h3>Frontend</h3>
                <p>React • Javascript • Flutter</p>
              </div>
              <div>
                <h3>Backend</h3>
                <p>Node.js • Express • Java • Spring Boot</p>
              </div>
              <div>
                <h3>Database</h3>
                <p>MySQL  • MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}