import { createFileRoute, Link } from '@tanstack/react-router';
import { projects } from '@/data/projects';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { SEO } from '@/components/SEO';
import { useEffect } from 'react';

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) {
      throw new Error('Project not found');
    }
    return { project };
  },
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
      />

      <div className="section-container pt-20 bg-white/10 dark:bg-bg-oled/10 min-h-screen transition-colors duration-300">
        <Link
          to="/"
          className="inline-flex items-center text-brand-red hover:text-brand-burgundy dark:text-accent-peach dark:hover:text-accent-light mb-8 transition-colors group px-4 md:px-0"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </Link>

        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <div className="mb-8 p-4 md:p-0">
            <span className="inline-block px-4 py-2 bg-brand-red/10 dark:bg-accent-peach/10 text-brand-red dark:text-accent-peach rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-brand-red/20 dark:border-accent-peach/20">
              {project.category}
            </span>
            <h1 className="heading-primary mb-4">{project.title}</h1>
            <p className="text-body mb-6 text-lg">{project.description}</p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden border border-navy-100 dark:border-navy-800 shadow-xl bg-white dark:bg-navy-900">
            <ProjectCarousel images={project.screenshots} projectTitle={project.title} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8 pb-12">
            <div className="bg-navy-50 dark:bg-navy-900/40 backdrop-blur-sm rounded-2xl p-8 border border-navy-100 dark:border-navy-800 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-navy-900 dark:text-white border-b border-navy-200 dark:border-navy-700 pb-2">
                Key Highlights
              </h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start text-navy-700 dark:text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-brand-red dark:text-accent-peach mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-50 dark:bg-navy-900/40 backdrop-blur-sm rounded-2xl p-8 border border-navy-100 dark:border-navy-800 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-navy-900 dark:text-white border-b border-navy-200 dark:border-navy-700 pb-2">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-navy-800 hover:bg-white/80 text-navy-700 dark:text-gray-300 rounded-lg font-medium border border-navy-100 dark:border-navy-700 transition-colors shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
