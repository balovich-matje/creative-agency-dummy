import { Suspense, lazy } from 'react'
import './Works.css'

const Spline = lazy(() => import('@splinetool/react-spline'))

const projects = [
  {
    title: 'NovaTech',
    category: 'Брендинг / Веб-дизайн',
    description: 'Полный ребрендинг технологической компании — от айдентики до корпоративного сайта.',
    color: '#1a1a2e',
    scene: 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode',
  },
  {
    title: 'GreenLeaf',
    category: 'E-commerce / Motion',
    description: 'Интернет-магазин органической косметики с анимированным интерфейсом.',
    color: '#1a2e1a',
    scene: 'https://prod.spline.design/aR8RJVAStugdKyXD/scene.splinecode',
  },
  {
    title: 'SkyLine Events',
    category: 'Айдентика / Маркетинг',
    description: 'Визуальная система и рекламная кампания для ивент-агентства.',
    color: '#1a1a2e',
    scene: 'https://prod.spline.design/Nmx4Vyeze9wJ-9zm/scene.splinecode',
  },
  {
    title: 'UrbanFlow',
    category: 'Приложение / UI/UX',
    description: 'Мобильное приложение для городской навигации с минималистичным дизайном.',
    color: '#2e1a1a',
    scene: 'https://prod.spline.design/7ZoGKAmh2VTvMxuy/scene.splinecode',
  },
]

function Works() {
  return (
    <section className="works" id="works">
      <div className="container">
        <div className="works__header">
          <div>
            <p className="section-label">Портфолио</p>
            <h2 className="section-title">Избранные проекты</h2>
          </div>
          <a href="#contact" className="btn btn-outline">
            Все работы
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="works__grid">
          {projects.map((project) => (
            <article key={project.title} className="work-card">
              <div
                className="work-card__image"
                style={{ backgroundColor: project.color }}
              >
                <Suspense fallback={
                  <div className="work-card__placeholder">
                    <span>{project.title[0]}</span>
                  </div>
                }>
                  <div className="work-card__spline">
                    <Spline scene={project.scene} />
                  </div>
                </Suspense>
              </div>
              <div className="work-card__info">
                <span className="work-card__category">{project.category}</span>
                <h3 className="work-card__title">{project.title}</h3>
                <p className="work-card__description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
