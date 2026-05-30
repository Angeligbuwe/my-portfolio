

export const Project = () => {
  const projects = [
    {
      title: "Cake Recipe Finder",
      description: "A recipe website where users can search for cake recipes using an API.",
      image: "ANG3.jpeg",
      liveDemo: "https://angeligbuwe.github.io/Cake-Dessert-Recipe-Finder/",
      github: "https://github.com/Angeligbuwe/Cake-Dessert-Recipe-Finder",
    },

    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React, TypeScript and Tailwind CSS.",
      image: "Img6.jpg",
      liveDemo: "https://angel-personal-portfolio.netlify.app/",
      github: "https://github.com/Angeligbuwe/my-portfolio-project.git",
    },
    {
      title: "Resume",
      description: "The website presents my profile, skills, experience, and contact information using HTML and CSS",
      image: "ANG4.jpeg",
      liveDemo: "https://angeligbuwe.github.io/resume-html-css/",
      github: "https://github.com/Angeligbuwe/resume-html-css",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-pink-400">Projects</span>
        </h2>

        <p className="text-gray-300 text-center mb-12">
          Here are some school projects I have worked on.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl overflow-hidden border 
              border-white/10 hover:scale-105 transition duration-300"
            >
              {/* Click image to live demo */}
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-300 mb-5">{project.description}</p>

                {/* Project buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-pink-500 text-white 
                    text-sm hover:bg-pink-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-pink-400
                    text-pink-400 text-sm hover:bg-pink-400 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};












