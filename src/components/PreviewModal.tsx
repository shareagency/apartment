import { PreviewModalProps } from '../types'

const PreviewModal = ({ imageSrc, onClose }: PreviewModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-fade-in-up"
      onClick={handleOverlayClick}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
        onClick={onClose}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      
      <div className="relative max-w-4xl max-h-[90vh] p-4">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Превью квартиры"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
          />
        )}
      </div>
    </div>
  )
}

PreviewModal.displayName = 'PreviewModal'

export default PreviewModal
