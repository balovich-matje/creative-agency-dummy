import './About.css'

const values = [
  {
    icon: '◆',
    title: 'Индивидуальный подход',
    description: 'Каждый проект уникален — мы вникаем в специфику вашего бизнеса и находим нестандартные решения.',
  },
  {
    icon: '◇',
    title: 'Прозрачный процесс',
    description: 'Вы всегда в курсе происходящего — регулярные отчёты, демонстрации и открытое общение.',
  },
  {
    icon: '○',
    title: 'Результат в фокусе',
    description: 'Красивый дизайн — это средство. Наша цель — ваш рост, конверсии и узнаваемость бренда.',
  },
]

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <p className="section-label">О нас</p>
          <h2 className="section-title">
            Команда, которая превращает
            <br />
            идеи в результат
          </h2>
          <p className="section-description">
            FLAVOR — это команда дизайнеров, разработчиков и маркетологов,
            объединённых страстью к созданию выдающихся цифровых продуктов.
          </p>
        </div>

        <div className="about__values">
          {values.map((value) => (
            <div key={value.title} className="about__value">
              <span className="about__value-icon">{value.icon}</span>
              <h3 className="about__value-title">{value.title}</h3>
              <p className="about__value-description">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="about__marquee">
          <div className="about__marquee-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="about__marquee-content">
                <span>Брендинг</span>
                <span className="about__marquee-dot">●</span>
                <span>Дизайн</span>
                <span className="about__marquee-dot">●</span>
                <span>Разработка</span>
                <span className="about__marquee-dot">●</span>
                <span>Маркетинг</span>
                <span className="about__marquee-dot">●</span>
                <span>Motion</span>
                <span className="about__marquee-dot">●</span>
                <span>3D</span>
                <span className="about__marquee-dot">●</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
