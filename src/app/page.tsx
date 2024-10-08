import projects from '@/data/projects';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 sm:p-20">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mina projekt
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          En samling av mina favoritprojekt
        </p>
      </header>

      {/* Projects Grid */}
      <main className="flex flex-col items-center">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </ul>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
        <p>
          Fler projekt är tillgängliga på{" "}
          <a
            href="https://github.com/f-i-l-i-p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          <a
            href="https://github.com/f-i-l-i-p?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Visa fler projekt
          </a>
        </p>
      </footer>
    </div>
  );
}
