// src/App.jsx   (or App.tsx)
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';       // ← create this
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Allow common variations people type in URL */}
          <Route path="/home" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Optional: 404 fallback */}
          <Route path="*" element={
            <div style={{ padding: '140px 24px', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
              <p>Go back to <a href="/">Home</a></p>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;