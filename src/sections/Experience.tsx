
export const Experience = () => {

  const education = [
    { title: "Web Development Advanced",
      place: "ReDI School of Digital Integration",
      year: "Mar 2026 - Jun 2026",
      details: ["React, TypeScript, Tailwind CSS, Git, and project work"]
    },
    {
      title: "Web Development Fundamentals",
      place: "ReDI School of Digital Integration",
      year: "Sept 2025 - Dec 2025",
      details: ["HTML, CSS, JavaScript fundamentals", "Responsive web design"],
    },
    {
      title: "Introduction to Coding, Data & Design",
      place: "ReDI School of Digital Integration",
      year: "Mar 2025 - May 2025",
      details: ["HTML, CSS, JavaScript, Git", "Python basics and UX/UI design"],
    },
  ];

  const experiences = [
    {
      role: "Intern | Office & Project Management",
      company: "ReDI School of Digital Integration",
      year: "2025",
      details: [
        "Assisted with digital projects and office coordination tasks",
        "Learned and applied basic project management principles",
      ],
    },
    {
      role: "Intern | Office Assistant & Reception",
      company: "Helios Logistik SBD GmbH",
      year: "May 2023 - June 2023",
      details: [
        "Supported administrative and digital communication processes",
        "Gained experience in customer support and data organization",
      ],
    },
    {
      role: "Teacher | Computer Fundamentals",
      company: "Greater Tomorrow Nursery / Primary School",
      year: "Mar 2006 - Nov 2011",
      details: [
        "Taught computer basics to children and young learners",
        "Introduced students to Microsoft Office and digital literacy",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience & <span className="text-pink-400">Education</span>
        </h2>

        <p className="text-gray-400 text-center mb-14">
          A summary of my practical work, learning journey, and digital skills development.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* EDUCATION */}
          <div className="rounded-3xl border border-white/10 p-8 shadow-[0_0_35px_rgba(59,130,246,0.18)]">
            <h3 className="text-2xl font-bold mb-8">
              Education & <span className="text-blue-400">Training</span>
            </h3>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-blue-400/50 hover:-translate-y-1 transition duration-500"
                >
                  <p className="text-sm text-blue-400 mb-2">{item.year}</p>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-pink-400 mb-4">{item.place}</p>

                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="rounded-3xl border border-white/10 p-8 shadow-[0_0_35px_rgba(236,72,153,0.18)]">
            <h3 className="text-2xl font-bold mb-8">
              Practical <span className="text-pink-400">Experience</span>
            </h3>

            <div className="space-y-6">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-pink-400/50 hover:-translate-y-1 transition duration-500"
                >
                  <p className="text-sm text-pink-400 mb-2">{item.year}</p>
                  <h4 className="text-xl font-semibold">{item.role}</h4>
                  <p className="text-blue-400 mb-4">{item.company}</p>

                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-pink-400/20 bg-white/5 p-6 text-center text-gray-300">
          My previous roles helped me build communication, organization,
          teamwork, and problem-solving skills that I now bring into frontend development.
        </div>
      </div>
    </section>
  );
};