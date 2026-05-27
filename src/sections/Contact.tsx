import contactImage from '../assets/contact.img.png';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Contact <span className="text-pink-400">Me</span>
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Have a question? Please send me a message.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <form
            action="https://formspree.io/f/mjkzbqyb"
            method="POST"
            className="p-8 rounded-2xl space-y-6 bg-white/5">

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-pink-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-pink-400"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-pink-400 resize-none"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-pink-500 px-6 py-3 font-semibold text-white hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative overflow-hidden rounded-3xl border border-pink-400/20 shadow-[0_0_40px_rgba(236,72,153,0.25)] group h-full">
            <img
              src={contactImage}
              alt="Workspace"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        <footer className="text-center py-4 text-gray-400 border-t border-gray-800 mt-12">
          <p>&copy; 2026 Angel Osayimwense Igbuwe. All rights reserved.</p>
          <p className="text-sm">Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
};