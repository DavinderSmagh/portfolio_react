import Header from '../components/Header';
import Footer from '../components/Footer';

// Import ALL images you're using from assets folder
import todoThumbnail from '../assets/todo-app-thumbnail.png.webp';   // adjust exact name if needed
import quoteThumbnail from '../assets/quote.webp';                   // adjust if name is different
import clockThumbnail from '../assets/clock.webp';                   // adjust if needed
import candyCrushThumbnail from '../assets/Candy-Crush.webp';       // adjust name/extension
// Add more imports when you use more images
// import electroShopThumbnail from '../assets/Electro-shop.webp';
// etc.

const projects = [
  {
    title: "To-Do List App",
    description: "A simple yet powerful task management application with local storage.",
    image: todoThumbnail,
    link: "/projects/To-Do list/index.html"   // ← change this later to React route if possible
  },
  {
    title: "Random Quote Generator",
    description: "Generates inspiring random motivational quotes with copy to clipboard feature.",
    image: quoteThumbnail,
    link: "/projects/quote-generator/index.html"
  },
  {
    title: "Digital Clock",
    description: "Clean, modern real-time digital clock with date display.",
    image: clockThumbnail,
    link: "/projects/digital-clock/index.html"
  },
  {
    title: "Candy Crush Clone",
    description: "Fun match-3 game inspired by the classic Candy Crush.",
    image: candyCrushThumbnail,
    link: "/projects/candy-crush/index.html"
  },
  // You can add more projects here later
  // {
  //   title: "Weather App",
  //   description: "...",
  //   image: weatherThumbnail,
  //   link: "..."
  // },
];

export default function Projects() {
  return (
    <>
      <Header />

      <section style={{ paddingTop: '140px', paddingBottom: '80px' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', textAlign: 'center' }}>
            My Projects
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: '1.3rem',
            color: '#555',
            marginBottom: '60px'
          }}>
            Here are some of the projects I've built
          </p>

          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p style={{ color: '#666', margin: '12px 0 20px' }}>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}