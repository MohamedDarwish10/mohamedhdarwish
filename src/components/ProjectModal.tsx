import { Project } from '@/data/projects';
import { ProjectCarousel } from './ProjectCarousel';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-white/90 dark:bg-bg-oled/95 backdrop-blur-xl"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-6xl h-full max-h-full overflow-y-auto bg-white dark:bg-navy-900 shadow-2xl rounded-3xl border border-navy-100 dark:border-navy-800 flex flex-col"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 bg-navy-100 dark:bg-navy-800 rounded-full text-navy-600 dark:text-gray-300 hover:bg-brand-red hover:text-white dark:hover:bg-accent-peach dark:hover:text-navy-900 transition-colors shadow-lg"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Scrollable Content Container */}
                    <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar">

                        <div className="mb-8">
                            <span className="inline-block px-4 py-2 bg-brand-red/10 dark:bg-accent-peach/10 text-brand-red dark:text-accent-peach rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-brand-red/20 dark:border-accent-peach/20">
                                {project.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
                                {project.title}
                            </h2>
                            <p className="text-navy-700 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
                                {project.description}
                            </p>
                        </div>

                        {/* Carousel */}
                        <div className="mb-12 rounded-2xl overflow-hidden border border-navy-100 dark:border-navy-800 shadow-xl">
                            <ProjectCarousel images={project.screenshots} projectTitle={project.title} />
                        </div>

                        {/* Highlights & Tech */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Highlights */}
                            <div className="bg-navy-50 dark:bg-white/5 rounded-2xl p-8 border border-navy-100 dark:border-none">
                                <h3 className="text-2xl font-bold mb-6 text-navy-900 dark:text-white border-b border-navy-200 dark:border-white/10 pb-2">
                                    Key Highlights
                                </h3>
                                <ul className="space-y-4">
                                    {project.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start text-navy-700 dark:text-gray-300">
                                            <svg className="w-5 h-5 text-brand-red dark:text-accent-peach mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Stack */}
                            <div className="bg-navy-50 dark:bg-white/5 rounded-2xl p-8 border border-navy-100 dark:border-none">
                                <h3 className="text-2xl font-bold mb-6 text-navy-900 dark:text-white border-b border-navy-200 dark:border-white/10 pb-2">
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 bg-white dark:bg-navy-900 hover:bg-white/80 text-navy-700 dark:text-gray-300 rounded-lg font-medium border border-navy-100 dark:border-navy-700 transition-colors shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
