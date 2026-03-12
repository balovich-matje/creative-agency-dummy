import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info">
            <p className="section-label">Связаться</p>
            <h2 className="section-title">
              Давайте обсудим
              <br />
              ваш проект
            </h2>
            <p className="section-description">
              Расскажите о вашей идее — мы предложим решение,
              которое выведет ваш бизнес на новый уровень.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-label">Email</span>
                <a href="mailto:hello@flavor.studio" className="contact__detail-value">
                  hello@flavor.studio
                </a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Телефон</span>
                <a href="tel:+74951234567" className="contact__detail-value">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Telegram</span>
                <span className="contact__detail-value">@flavor_studio</span>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__form-group">
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" placeholder="Как к вам обращаться?" />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">О проекте</label>
              <textarea id="message" rows="5" placeholder="Расскажите кратко о вашем проекте, целях и сроках..." />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              Отправить заявку
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
