import './Services.css'

const services = [
  {
    number: '01',
    title: 'Брендинг и айдентика',
    description: 'Разрабатываем уникальный визуальный язык бренда — от логотипа и фирменного стиля до полного брендбука.',
    tags: ['Логотипы', 'Фирменный стиль', 'Брендбук', 'Гайдлайны'],
  },
  {
    number: '02',
    title: 'Веб-дизайн и разработка',
    description: 'Проектируем и создаём современные сайты, которые конвертируют посетителей в клиентов.',
    tags: ['Лендинги', 'Корпоративные сайты', 'E-commerce', 'Web-приложения'],
  },
  {
    number: '03',
    title: 'Motion-дизайн и 3D',
    description: 'Анимация и трёхмерная графика, которые оживляют ваш бренд и привлекают внимание аудитории.',
    tags: ['3D-визуализация', 'Анимация', 'Видео', 'AR/VR'],
  },
  {
    number: '04',
    title: 'Digital-маркетинг',
    description: 'Комплексное продвижение в цифровой среде: от стратегии до реализации рекламных кампаний.',
    tags: ['SMM', 'Таргет', 'SEO', 'Контент-стратегия'],
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div>
            <p className="section-label">Услуги</p>
            <h2 className="section-title">Что мы делаем</h2>
          </div>
          <p className="section-description">
            Полный спектр креативных услуг для построения сильного бренда
            и эффективного присутствия в цифровом пространстве.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.number} className="service-card">
              <span className="service-card__number">{service.number}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-card__tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
