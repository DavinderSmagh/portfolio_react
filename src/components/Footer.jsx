export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--gray)', 
      padding: '60px 0 40px', 
      textAlign: 'center', 
      marginTop: '80px' 
    }}>
      <div className="container">
        <p style={{ color: 'var(--text-light)' }}>
          © {new Date().getFullYear()} Davinder Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}