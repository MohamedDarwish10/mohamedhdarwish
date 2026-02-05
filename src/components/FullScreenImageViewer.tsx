import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface FullScreenImageViewerProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    initialIndex: number;
    altText?: string;
}

export function FullScreenImageViewer({ isOpen, onClose, images, initialIndex, altText }: FullScreenImageViewerProps) {
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Sync internal state with props when re-opening or changing initialIndex
    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex, isOpen]);

    useEffect(() => {
        setMounted(true);

        // Store original overflow style to restore later
        const originalOverflow = document.body.style.overflow;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            // Restore the original overflow.
            // If we were opened on top of ProjectModal (which sets overflow: hidden),
            // originalOverflow will be 'hidden', so we restore 'hidden'.
            // This prevents breaking the underlying modal's scroll lock.
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen]);

    // Keyboard Navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]); // Re-bind if index changes (though functional update avoids this dependency, good practice to be safe)

    const showPrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const showNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center overflow-hidden"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-[210] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
                        aria-label="Close fullscreen view"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={showPrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-[210] p-4 text-white/70 hover:text-white transition-colors focus:outline-none"
                                aria-label="Previous image"
                            >
                                <svg className="w-10 h-10 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={showNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-[210] p-4 text-white/70 hover:text-white transition-colors focus:outline-none"
                                aria-label="Next image"
                            >
                                <svg className="w-10 h-10 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Image Container */}
                    <motion.div
                        key={currentIndex} // Re-animate on index change
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full h-full flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
                    >
                        {/* 
                            Mobile Landscape Force Logic:
                            On mobile (small screens), we rotate the container 90deg if it's in portrait mode.
                         */}
                        <div className="relative w-full h-full flex items-center justify-center md:orientation-normal mobile-landscape-force">
                            <style>{`
                    @media (max-width: 768px) and (orientation: portrait) {
                        .mobile-landscape-force {
                            transform: rotate(90deg);
                            width: 100vh;
                            height: 100vw;
                            max-width: 100vh;
                            max-height: 100vw;
                        }
                        .mobile-image-force {
                             width: 100%;
                             height: 100%;
                             object-fit: contain;
                        }
                    }
                `}</style>
                            <img
                                src={images[currentIndex]}
                                alt={altText ? `${altText} - Image ${currentIndex + 1}` : `Fullscreen view ${currentIndex + 1}`}
                                className="max-w-full max-h-full object-contain shadow-2xl mobile-image-force select-none"
                                draggable={false}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
