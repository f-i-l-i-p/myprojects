import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  image: string;
}

export default function ProjectCard({ name, description, link, image }: ProjectCardProps) {
  return (
    <li className="mb-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        {/* Image at the top */}
        <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
          <Image
            src={image}
            alt={name}
            className="object-cover w-full h-full"
            width={400}
            height={300}
          />
        </div>

        {/* Card content */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </a>
    </li>
  );
}
