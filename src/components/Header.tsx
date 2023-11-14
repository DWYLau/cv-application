import "../styles/Header.css"

interface HeaderProps {
  children: React.ReactNode
}

function Header({ children }: HeaderProps) {
  return (
    <header className='header'>
      <h1>CV Application</h1>
      {children}
    </header>
  )
}

export default Header
