import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
};

export const GitHubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Angeligbuwe/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 3)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="py-24 bg-gray-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest <span className="text-pink-400">GitHub Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-pink-400/50 hover:-translate-y-2 transition duration-500"
            >
              <FaGithub className="text-5xl text-pink-400 mb-6" />

              <h3 className="text-xl font-bold text-pink-400 break-words">
                {repo.name}
              </h3>

              <p className="mt-4 text-gray-300 text-sm leading-6">
                {repo.description || "No description added yet."}
              </p>

              <p className="mt-6 text-blue-400 font-semibold">
                View Repository →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};