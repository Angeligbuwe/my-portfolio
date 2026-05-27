const testimonials = [
  {
    name: "Sarah Johnson",
    role: "UX Designer",
    message:
      "Angel is a passionate frontend developer with a great eye for clean UI design. Her projects are modern, responsive and user-friendly.",
  },
  {
    name: "Michael Brown",
    role: "Software Developer",
    message:
      "Working with Angel was amazing. She pays attention to detail and builds beautiful interfaces using React and Tailwind CSS.",
  },
  {
    name: "Sophia Lee",
    role: "Project Mentor",
    message:
      "Angel learns quickly and always brings creativity into her projects. Her portfolio and frontend skills continue to improve impressively.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#111] border border-pink-500/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
          >
            <p className="text-gray-300 mb-6 italic">
              "{testimonial.message}"
            </p>

            <h3 className="text-xl font-semibold text-pink-400">
              {testimonial.name}
            </h3>

            <p className="text-sm text-gray-400">
              {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};