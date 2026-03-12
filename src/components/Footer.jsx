import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="header__logo">
              <span className="header__logo-mark">FL</span>
              <span className="header__logo-text">FLAVOR</span>
            </a>
            <p className="footer__tagline">
              Креативное digital-агентство полного цикла.
              Создаём бренды, которые работают.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4 className="footer__col-title">Навигация</h4>
              <a href="#services">Услуги</a>
              <a href="#works">Проекты</a>
              <a href="#about">О нас</a>
              <a href="#contact">Контакт</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Услуги</h4>
              <a href="#services">Брендинг</a>
              <a href="#services">Веб-дизайн</a>
              <a href="#services">Motion-дизайн</a>
              <a href="#services">Маркетинг</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Соцсети</h4>
              <a href="#">Telegram</a>
              <a href="#">Behance</a>
              <a href="#">Dribbble</a>
              <a href="#">VK</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} FLAVOR Studio. Все права защищены.</p>
          <p className="footer__bottom-note">Сделано с вниманием к деталям</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
