import { Suspense, lazy } from 'react'
import './Hero.css'

const Spline = lazy(() => import('@splinetool/react-spline'))

function Hero() {
  return (
    <section className="hero">
      <div className="hero__spline">
        <Suspense fallback={<div className="hero__spline-fallback" />}>
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </Suspense>
        <div className="hero__spline-overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Креативное digital-агентство
        </div>

        <h1 className="hero__title">
          Создаём бренды,
          <br />
          которые <span className="hero__title-accent">запоминаются</span>
        </h1>

        <p className="hero__subtitle">
          Дизайн, разработка и продвижение — комплексные решения
          для бизнеса, который хочет выделяться среди конкурентов.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            Начать проект
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#works" className="btn btn-outline">
            Смотреть работы
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">150+</span>
            <span className="hero__stat-label">Реализованных проектов</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">7 лет</span>
            <span className="hero__stat-label">На рынке</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">98%</span>
            <span className="hero__stat-label">Довольных клиентов</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
