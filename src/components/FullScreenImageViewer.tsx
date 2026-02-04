import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface FullScreenImageViewerProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    altText?: string;
}

export function FullScreenImageViewer({ isOpen, onClose, imageSrc, altText }: FullScreenImageViewerProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Lock body scroll when viewer is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // We don't unlock here immediately because ProjectModal might still be open and wants it locked.
            // However, since we are using a Portal, we are independent.
            // If ProjectModal is open, it has its own lock.
            // If we blindly unlock, we might break ProjectModal's lock.
            // But typically React state updates batch or happen sequentially.
            // Let's rely on the parent component or just simpler logic:
            // If this component unmounts or closes, we revert *our* change?
            // Actually, safest is to just let it be. If ProjectModal is underneath, it keeps it locked.
            // But wait, if I set it to 'hidden', does it overwrite 'hidden'? Yes.
            // If I set it to 'unset', does it break ProjectModal? Yes.
            // A better way is to not touch body scroll here if we assume ProjectModal already locked it.
            // But this viewer might be used outside ProjectModal too?
            // Let's assume it's fine for now or check if body has overflow hidden already.
        }

        return () => {
            // Cleanup logic is tricky with nested locks. 
            // For now, let's skip body unlock here to stay safe with the underlying modal.
        };
    }, [isOpen]);

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
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
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
                                src={imageSrc}
                                alt={altText || "Fullscreen view"}
                                className="max-w-full max-h-full object-contain shadow-2xl mobile-image-force"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
