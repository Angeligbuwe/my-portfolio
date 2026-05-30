import angelImg from "../assets/Ang1.png";

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative bg-gray-950 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center rounded-3xl p-8 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(236,72,153,0.4)] animate-fade-in transition duration-500 hover:border-pink-400/40 hover:scale-[1.02]">
          
          {/* LEFT SECTION */}
          <div>
            {/* TITLE + SUBTITLE */}
            <div className="text-center lg:text-left mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-pink-400">Me</span>
              </h2>

              <div className="w-20 h-1 bg-pink-400 rounded-full mx-auto lg:mx-0 mb-5"></div>

              <p className="text-gray-400 text-lg">
                A little bit about my journey into tech
              </p>
            </div>

            {/* CONTENT CARD */}
            <div className="max-w-3xl bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-[0_0_30px_rgba(236,72,153,0.15)] animate-fade-in animation-delay-200">
              <p className="text-gray-300 leading-relaxed mb-4">
                I’m a motivated web development student with a growing foundation
                in frontend development and UX/UI design. I completed the ICDD
                program at ReDI School and an IT course, where I developed
                practical skills in building modern web applications.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                My background in Applied Microbiology and Agricultural Economics
                has helped me build strong analytical and problem solving skills.
                I enjoy creating clean, user-friendly interfaces and bringing
                ideas to life through design and code.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                I’m currently looking for a Junior Frontend Developer role where
                I can continue learning, grow my skills, and contribute to real
                world projects.
              </p>

              <p className="text-gray-300 mt-4 glass glow-animate rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                “My goal is to build simple, user-friendly web applications that
                solve real problems. I’m focused on growing as a frontend
                developer while creating experiences that are both functional and
                visually engaging.”
              </p>


            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-2xl max-h-[650px] w-[300px] md:w-[380px] border-2 p-2 glow border-pink-400/40 shadow-[0_0_40px_rgba(236,72,153,0.4)] overflow-hidden">
              <img
                src={angelImg}
                alt="Angel Osayimwense Igbuwe"
                className="w-full object-cover rounded-2xl hover:rotate-3 
                hover:scale-105 transition-transform duration-500"
              />

              <section id="resume" className="py-24 bg-gray-950 text-white">
                    <div className="container mx-auto px-6 text-center">
                      <h2 className="text-4xl font-bold mb-4">
                        My <span className="text-pink-400">Resume</span>
                      </h2>
              
                      <p className="text-gray-300 mb-8">
                        You can view or download my resume below.
                      </p>
              
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="/Angel_Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition"
                        >
                          View Resume
                        </a>
              
                        <a
                          href="/Angel_Resume.pdf"
                          download
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold hover:opacity-90 transition"
                        >
                          Download Resume
                        </a>
                      </div>
                    </div>
                  </section>
           
            </div>
          </div>
        </div>
      </div>

      {/* DECORATIVE PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full animate-pulse glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};