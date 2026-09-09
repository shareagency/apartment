import { ContractLinkProps } from '../types'

const ContractLink = ({ href }: ContractLinkProps) => {
  return (
    <section className="container mx-auto px-4 mt-12 mb-8 text-center animate-fade-in-up">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md min-h-[44px]"
      >
        <span className="text-xl">📄</span>
        Скачать договор
      </a>
    </section>
  )
}

ContractLink.displayName = 'ContractLink'

export default ContractLink
