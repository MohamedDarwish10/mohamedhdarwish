import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section-container ${className}`}>
      {title && (
        <h2 className="heading-secondary text-center mb-12">{title}</h2>
      )}
      {children}
    </section>
  );
}
