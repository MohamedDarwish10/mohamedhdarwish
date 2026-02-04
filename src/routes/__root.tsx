import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SEO } from '@/components/SEO';
import { personalInfo } from '@/data/personal';
import { useEffect, useState, useMemo } from 'react';

// Memoized Background Component to prevent re-rendering on scroll
const BackgroundElements = () => {
  const stars = useMemo(() => [...Array(50)].map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 3}px`,
    height: `${Math.random() * 3}px`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.7 + 0.3
  })), []);

  const sparkles = useMemo(() => [...Array(20)].map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 4 + 1}px`,
    height: `${Math.random() * 4 + 1}px`,
    animationDelay: `${Math.random() * 4}s`,
  })), []);

  return (
    <>
      {/* 1. Deep Space Stars (Twinkling) */}
      <div className="absolute inset-0 w-full h-full">
        {stars.map((style, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-brand-red dark:bg-gold-200 rounded-full animate-twinkle"
            style={style}
          />
        ))}
      </div>

      {/* 2. Bolder Waves Pattern (Maroon/Gold Gradients) */}
      <div className="absolute inset-0 w-full h-full opacity-40 dark:opacity-50">
        <svg className="w-full h-full min-w-[1200px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="globalMeshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#800020" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#800020" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M-100,100 C 300,300 800,-100 2000,100" fill="none" stroke="url(#globalMeshGrad)" strokeWidth="4" className="animate-pulse" style={{ animationDuration: '15s' }} />
          <path d="M-100,400 C 400,100 900,600 2000,300" fill="none" stroke="url(#globalMeshGrad)" strokeWidth="4" className="animate-pulse" style={{ animationDuration: '18s' }} />
          <path d="M-100,700 C 500,500 1000,900 2000,600" fill="none" stroke="url(#globalMeshGrad)" strokeWidth="4" className="animate-pulse" style={{ animationDuration: '20s' }} />
        </svg>
      </div>

      {/* 3. Global Sparkles (Gold Dust) */}
      <div className="absolute inset-0 w-full h-full">
        {sparkles.map((style, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute bg-gold-400 dark:bg-gold-300 rounded-full animate-sparkle shadow-[0_0_8px_#D4AF37]"
            style={{ ...style, opacity: 0 }}
          />
        ))}
      </div>

      {/* 4. Ambient Blobs (Subtle) */}
      <div className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen">
        <div className="absolute top-[10%] right-[10%] w-[40rem] h-[40rem] bg-brand-burgundy rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[0%] left-[0%] w-[50rem] h-[50rem] bg-gold-600/30 rounded-full blur-[150px] animate-blob animation-delay-2000" />
      </div>
    </>
  );
};

// Nav Link with Scroll Spy Logic
const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (href === '/') {
        setIsActive(window.scrollY < 300);
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Check if element is in the upper part of the viewport or covering it
        const inView = rect.top <= 150 && rect.bottom >= 150;
        setIsActive(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If we're on the home page, just scroll
    if (window.location.pathname === '/') {
      if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // If we're on a different page, navigate to home first
      if (href === '/') {
        window.location.href = '/';
      } else {
        window.location.href = '/' + href;
      }
    }
  };

  return (
    <a
      href={href === '/' ? '/' : '/' + href}
      onClick={handleClick}
      className={`relative px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 rounded-full whitespace-nowrap
        ${isActive
          ? 'text-brand-red dark:text-accent-peach bg-brand-red/5 dark:bg-accent-peach/10 font-bold'
          : 'text-navy-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-accent-peach'
        }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-brand-red dark:bg-accent-peach rounded-full" />
      )}
    </a>
  );
};

export const Route = createRootRoute({
  component: () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 10) {
          // Always show navbar at the top
          setIsNavbarVisible(true);
        } else if (currentScrollY > lastScrollY) {
          // Scrolling down - hide navbar
          setIsNavbarVisible(false);
        } else {
          // Scrolling up - show navbar
          setIsNavbarVisible(true);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
      <>
        <SEO />
        <div className="min-h-screen transition-colors duration-300 font-sans relative">

          {/* === GLOBAL BACKGROUND (Deep Space & bold waves) === */}
          <div className="fixed inset-0 w-full h-[100dvh] pointer-events-none z-0">
            <BackgroundElements />
          </div>

          <header className={`sticky top-0 z-50 bg-white/90 dark:bg-bg-oled/90 backdrop-blur-xl border-b border-navy-100 dark:border-navy-800 shadow-sm transition-all duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 md:gap-4 overflow-x-auto pb-1 md:pb-0 scrollbar-hide items-center">
                  {/* Logo replacing Home */}
                  <a
                    href="/"
                    onClick={(e) => {
                      if (window.location.pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center h-8 w-8 md:h-10 md:w-10 transition-transform hover:scale-105"
                  >
                    <img
                      src="/images/logo-small.svg"
                      alt="Home"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </a>

                  {/* Scroll Spy Nav Links */}
                  <NavLink href="#about">About</NavLink>
                  <NavLink href="#resume">Resume</NavLink>
                  <NavLink href="#projects">Portfolio</NavLink>
                </div>
                <div className="flex items-center gap-4 pl-4 shrink-0">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </header>
          <main>
            <Outlet />
          </main>
          <footer className="bg-navy-50 dark:bg-navy-900 border-t border-navy-100 dark:border-navy-800 mt-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center text-navy-600 dark:text-gray-400">
                <p className="font-bold text-2xl text-navy-900 dark:text-white mb-2 tracking-tight">{personalInfo.name.toUpperCase()}</p>
                <p className="text-sm mb-6 text-brand-red dark:text-accent-peach font-medium">{personalInfo.title}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm mb-6">
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-red dark:hover:text-accent-peach transition-colors">
                    {personalInfo.email}
                  </a>
                  <span className="hidden sm:inline text-navy-300 dark:text-navy-700">•</span>
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-brand-red dark:hover:text-accent-peach transition-colors">
                    {personalInfo.phone}
                  </a>
                  <span className="hidden sm:inline text-navy-300 dark:text-navy-700">•</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="mb-6">
                  <a
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-700 dark:text-accent-light hover:text-brand-red dark:hover:text-accent-peach transition-all duration-300 font-medium"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <p className="text-xs text-navy-400 dark:text-navy-600 mt-4">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  },
});
