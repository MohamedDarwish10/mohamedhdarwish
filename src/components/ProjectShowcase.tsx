import { Link } from '@tanstack/react-router';
import { Project } from '@/data/projects';
import { ProjectCarousel } from './ProjectCarousel';

interface ProjectShowcaseProps {
  project: Project;
  index?: number;
}

export function ProjectShowcase({ project, index = 0 }: ProjectShowcaseProps) {
  const isOdd = index % 2 === 1;
  return (
    <article className={`group relative flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-navy-900/40 rounded-3xl p-6 md:p-8 border border-navy-100 dark:border-navy-800 transition-all duration-500 hover:shadow-2xl hover:border-brand-red/20 ${isOdd ? 'md:flex-row-reverse' : ''}`}>

      {/* Image Carousel */}
      <div className="w-full md:flex-1 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-brand-red/10 transition-shadow">
        <ProjectCarousel images={project.screenshots} projectTitle={project.title} />
      </div>

      {/* Content */}
      <div className="w-full md:flex-1 space-y-6">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-3xl font-bold text-navy-900 dark:text-white group-hover:text-brand-red dark:group-hover:text-accent-peach transition-colors">
              {project.title}
            </h3>
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red dark:text-accent-peach border border-brand-red/20 dark:border-accent-peach/20 rounded-full bg-brand-red/5 dark:bg-accent-peach/5">
              {project.category}
            </span>
          </div>

          <p className="text-sm font-mono text-navy-500 dark:text-gray-400 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red dark:bg-accent-peach"></span>
            {project.dataSource} Data
          </p>

          <p className="text-navy-700 dark:text-gray-300 leading-relaxed text-lg">
            {project.shortDescription}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-navy-900 dark:text-white uppercase tracking-wider mb-3">
            Key Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-navy-50 dark:bg-navy-800 text-navy-700 dark:text-gray-300 rounded border border-navy-100 dark:border-navy-700 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/projects/$projectId"
          params={{ projectId: project.id }}
          className="btn-primary inline-flex items-center gap-2 group-hover:translate-x-1"
        >
          View Case Study
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
