import { Link } from '@tanstack/react-router';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-navy-900 rounded-xl shadow-lg border border-navy-100 dark:border-navy-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-brand-red/30">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={project.screenshots[0] || 'https://via.placeholder.com/600x400'}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm text-navy-900 dark:text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm border border-navy-100 dark:border-navy-700">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white group-hover:text-brand-red dark:group-hover:text-accent-peach transition-colors">
          {project.title}
        </h3>
        <p className="text-navy-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-navy-50 dark:bg-navy-800 text-navy-600 dark:text-gray-300 rounded border border-navy-100 dark:border-navy-700 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to="/projects/$projectId"
          params={{ projectId: project.id }}
          className="btn-secondary w-full block text-center py-2 text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
