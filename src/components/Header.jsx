import { useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-mark">FL</span>
          <span className="header__logo-text">FLAVOR</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
          <a href="#works" onClick={() => setMenuOpen(false)}>Проекты</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>О нас</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Контакт</a>
        </nav>

        <a href="#contact" className="btn btn-primary header__cta">
          Обсудить проект
        </a>

        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
