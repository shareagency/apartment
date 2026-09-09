interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col">
      <main className="flex-grow animate-fade-in-up">
        {children}
      </main>
      
      {/* Футер с анимацией */}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <p>© 2026 Apartment Landing Page. Все права защищены.</p>
      </footer>
    </div>
  )
}

Layout.displayName = 'Layout'

export default Layout
