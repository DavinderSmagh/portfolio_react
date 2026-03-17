export default function Home() {
  return (
    <section style={{ padding: '140px 24px 80px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.8rem', marginBottom: '1.2rem' }}>
          Hi, I'm Davinder
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#555', marginBottom: '2.5rem' }}>
          Full-Stack Developer • JavaScript • Java • MySQL
        </p>
        <a 
          href="/projects" 
          style={{
            display: 'inline-block',
            padding: '14px 36px',
            background: '#0066ff',
            color: 'white',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          View My Projects →
        </a>
      </div>
    </section>
  );
}