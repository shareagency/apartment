import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

interface GalleryCarouselProps {
  images?: string[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Если картинок нет, показываем плейсхолдер
  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8 text-center text-gray-400">
        Галерея пуста
      </div>
    );
  }

  const currentImage = images[selectedIndex] || images[0];

  // Навигация по основному изображению
  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Открытие модального окна
  const openPreview = (index: number) => {
    setPreviewIndex(index);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  // Автоматический скролл к выбранному превью
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const children = container.children;
      if (children[selectedIndex]) {
        const child = children[selectedIndex] as HTMLElement;
        const containerWidth = container.clientWidth;
        const childLeft = child.offsetLeft;
        const childWidth = child.offsetWidth;
        container.scrollTo({
          left: childLeft - containerWidth / 2 + childWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      <section className="w-full max-w-5xl mx-auto px-4 py-8">
        {/* Основное изображение с навигацией */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-4 bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={currentImage}
              alt={`Фото квартиры ${selectedIndex + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => openPreview(selectedIndex)}
            />
          </AnimatePresence>

          {/* Кнопки навигации */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors backdrop-blur-sm"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors backdrop-blur-sm"
                aria-label="Следующее фото"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Кнопка увеличения */}
          <button
            onClick={() => openPreview(selectedIndex)}
            className="absolute bottom-4 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors backdrop-blur-sm"
            aria-label="Увеличить"
          >
            <ZoomIn size={20} />
          </button>

          {/* Счётчик */}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>

        {/* Горизонтальная галерея превью с прокруткой */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-2"
          style={{
            scrollbarWidth: "thin",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-3 w-max">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                  idx === selectedIndex
                    ? "ring-2 ring-blue-500 ring-offset-2 shadow-lg scale-105"
                    : "opacity-70 hover:opacity-100 hover:scale-105"
                }`}
              >
                <img
                  src={img}
                  alt={`Превью ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.jpg";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно для увеличенного просмотра */}
      <Dialog.Root open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full max-h-[90vh] bg-black/20 rounded-xl overflow-hidden">
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors">
                  <X size={24} />
                </button>
              </Dialog.Close>

              <div className="flex items-center justify-center w-full h-[85vh]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={previewIndex}
                    src={images[previewIndex] || images[0]}
                    alt={`Увеличенное фото ${previewIndex + 1}`}
                    className="max-w-full max-h-[80vh] object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
              </div>

              {/* Навигация в модалке */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setPreviewIndex((prev) =>
                        prev === 0 ? images.length - 1 : prev - 1,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    aria-label="Предыдущее"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={() =>
                      setPreviewIndex((prev) =>
                        prev === images.length - 1 ? 0 : prev + 1,
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    aria-label="Следующее"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm">
                {previewIndex + 1} / {images.length}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default GalleryCarousel;
