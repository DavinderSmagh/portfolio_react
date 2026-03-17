import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate EmailJS / Formspree / backend later
    alert("Thank you! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Header />
      
      <section style={{ paddingTop: '140px' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', textAlign: 'center' }}>
            Get in Touch
          </h1>
          <p style={{ 
            textAlign: 'center', 
            maxWidth: '600px', 
            margin: '0 auto 60px', 
            color: 'var(--text-light)',
            fontSize: '1.2rem'
          }}>
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="input-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="input-group">
              <textarea 
                name="message" 
                placeholder="Your Message..." 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="btn" style={{ fontSize: '1.1rem' }}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}