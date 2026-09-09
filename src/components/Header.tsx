import { HeaderProps } from '../types'

const Header = ({ title }: HeaderProps) => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in-up">
        {title}
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
        Современная квартира для ваших удобств
      </p>
    </section>
  )
}

Header.displayName = 'Header'

export default Header
