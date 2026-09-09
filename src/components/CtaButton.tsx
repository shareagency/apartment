import { CtaButtonProps } from '../types'

const CtaButton = ({ href }: CtaButtonProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 mb-12 animate-fade-in-up">
      <span className="text-left text-gray-600 dark:text-gray-400 text-sm md:text-base">
        Если вам квартира понравилась то перейдите по ссылке на форму заполнения данных
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg min-h-[44px] flex items-center justify-center"
      >
        Перейти
      </a>
    </div>
  )
}

CtaButton.displayName = 'CtaButton'

export default CtaButton
