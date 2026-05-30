import { useState } from "react";
import { FaRobot, FaLanguage } from "react-icons/fa";

export const AISection = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [englishText, setEnglishText] = useState("");
  const [germanText, setGermanText] = useState("");

  const assistantData = {
    skills:
      "Angel works with React, TypeScript, Tailwind CSS, HTML, CSS, JavaScript, APIs, GitHub, and responsive UI design.",

    projects:
      "Angel has worked on a personal portfolio website, a cake recipe finder, GitHub API projects, an AI assistant, and an English to German translator.",

    contact:
      "You can contact Angel through the contact form, LinkedIn, or GitHub.",

    education:
      "Angel studied Applied Microbiology and Agricultural Economics. She also completed frontend development, UX/UI design, and coding training at ReDI School.",

    experience:
      "Angel has experience in office assistance, project assistance, reception, teaching computer fundamentals, customer support, and digital communication.",
  };

  const handleAssistant = () => {
    const text = question.toLowerCase();

    if (!text.trim()) {
      setAnswer("Please ask a question first.");
      return;
    }

    if (text.includes("skill")) {
      setAnswer(assistantData.skills);
    } else if (text.includes("project")) {
      setAnswer(assistantData.projects);
    } else if (text.includes("contact")) {
      setAnswer(assistantData.contact);
    } else if (text.includes("education") || text.includes("school")) {
      setAnswer(assistantData.education);
    } else if (text.includes("experience") || text.includes("work")) {
      setAnswer(assistantData.experience);
    } else {
      setAnswer(
        "I can answer questions about Angel's skills, projects, education, experience, and contact information."
      );
    }
  };


  const handleTranslate = async () => {
  if (!englishText.trim()) {
    setGermanText("Please write something in English first.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: englishText }),
    });

    const data = await response.json();

    if (data.translatedText) {
      setGermanText(data.translatedText);
    } else {
      setGermanText("Translation failed. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setGermanText("Could not connect to the AI server.");
  }
};



  return (
    <section
      id="ai-section"
      className="py-24 bg-gray-950 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          AI <span className="text-pink-400">Features</span>
        </h2>

        <p className="text-gray-400 text-center mb-14">
          Interactive tools for portfolio questions and English-German translation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI ASSISTANT CARD */}
          <div className="rounded-3xl border border-pink-400/20 bg-white/5 p-8 backdrop-blur-md shadow-[0_0_35px_rgba(236,72,153,0.18)] hover:border-pink-400/60 hover:-translate-y-2 transition duration-500">
            <FaRobot className="text-5xl text-pink-400 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              AI Portfolio Assistant
            </h3>

            <p className="text-gray-300 mb-6">
              Ask a question about my skills, projects, education, or experience.
            </p>

            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Example: What skills does Angel have?"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-pink-400 transition"
            />

            <button
              onClick={handleAssistant}
              className="mt-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white hover:scale-105 transition duration-300"
            >
              Ask Assistant
            </button>

            {answer && (
              <div className="mt-6 rounded-xl bg-white/10 border border-white/10 p-4 text-gray-200">
                {answer}
              </div>
            )}
          </div>

          {/* TRANSLATOR CARD */}
          <div className="rounded-3xl border border-blue-400/20 bg-white/5 p-8 backdrop-blur-md shadow-[0_0_35px_rgba(59,130,246,0.18)] hover:border-blue-400/60 hover:-translate-y-2 transition duration-500">
            <FaLanguage className="text-5xl text-blue-400 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              English to German Translator
            </h3>

            <p className="text-gray-300 mb-6">
              Translate simple English text into German.
            </p>

            <textarea
              value={englishText}
              onChange={(e) => setEnglishText(e.target.value)}
              placeholder="Write something in English..."
              rows={5}
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-blue-400 resize-none transition"
            />

            <button
              onClick={handleTranslate}
              className="mt-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white hover:scale-105 transition duration-300"
            >
              Translate
            </button>

            {germanText && (
              <div className="mt-6 rounded-xl bg-white/10 border border-white/10 p-4 text-gray-200">
                {germanText}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};