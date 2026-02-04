import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FullScreenImageViewer } from './FullScreenImageViewer';

interface ProjectCarouselProps {
  images: string[];
  projectTitle?: string;
}

export function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
  // Random delay offset to prevent all carousels from syncing
  const randomOffset = Math.floor(Math.random() * 3000);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 25 // Smooth transition duration in frames (25 frames ≈ 400ms at 60fps)
  }, [
    Autoplay({
      delay: 8000 + randomOffset,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <FullScreenImageViewer
        isOpen={!!fullScreenImage}
        onClose={() => setFullScreenImage(null)}
        imageSrc={fullScreenImage || ''}
        altText={projectTitle}
      />

      <div className="relative w-full group/carousel">
        <div className="overflow-hidden rounded-lg shadow-lg cursor-zoom-in" ref={emblaRef}>
          <div className="flex transition-transform duration-500 ease-out">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative aspect-[19/10] bg-navy-50 dark:bg-navy-900 overflow-hidden"
                onClick={() => setFullScreenImage(image)}
              >
                {/* Blurred Background Layer */}
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover blur-2xl opacity-50 scale-110 dark:opacity-40"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Main Image Layer */}
                <div className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-500 group-hover/carousel:scale-[1.02]">
                  <img
                    src={image}
                    alt={`${projectTitle || 'Project'} screenshot ${index + 1}`}
                    className="w-full h-full object-contain drop-shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-navy-900/50 hover:bg-navy-900/80 text-white rounded-full transition-all duration-200 z-20 backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 hover:scale-110"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
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
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-navy-900/50 hover:bg-navy-900/80 text-white rounded-full transition-all duration-200 z-20 backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 hover:scale-110"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); scrollTo(index); }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === selectedIndex
                  ? 'bg-brand-red dark:bg-accent-peach w-8 shadow-sm'
                  : 'bg-navy-300 dark:bg-navy-700 hover:bg-navy-400 dark:hover:bg-navy-600'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
