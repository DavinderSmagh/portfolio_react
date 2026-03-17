import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // assuming you're using react-router-dom

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <div className="logo" style={{ fontSize: '1.6rem', fontWeight: 700 }}>Davinder</div>

        <nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about"     >About</NavLink></li>
            <li><NavLink to="/projects"  >Projects</NavLink></li>
            <li><NavLink to="/contact"   >Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}