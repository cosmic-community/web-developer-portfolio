import { Project } from '@/types';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-semibold">{project.metadata.title}</h3>
            <p>{project.metadata.shortDescription}</p>
            {project.metadata.liveUrl && (
              <a href={project.metadata.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Project
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}