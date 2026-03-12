# FLAVOR Studio — Лендинг креативного агентства

Лендинг-страница для креативного digital-агентства, построенная на React + Vite с интерактивными 3D-сценами Spline.

## Стек технологий

- **React 19** — UI-библиотека
- **Vite 7** — сборщик проекта
- **Spline** (`@splinetool/react-spline`) — интерактивные 3D-сцены в hero-секции и карточках портфолио
- **CSS** — стилизация без фреймворков, CSS-переменные, адаптивная вёрстка

## Структура проекта

```
src/
├── main.jsx               # Точка входа
├── index.css              # Глобальные стили, переменные, утилиты
├── App.jsx                # Корневой компонент
└── components/
    ├── Header.jsx/css     # Фиксированная шапка с мобильным меню
    ├── Hero.jsx/css       # Hero-секция с 3D Spline-сценой
    ├── Services.jsx/css   # Карточки услуг
    ├── Works.jsx/css      # Портфолио с 3D-превью проектов
    ├── About.jsx/css      # О компании + бегущая строка
    ├── Contact.jsx/css    # Форма обратной связи + контакты
    └── Footer.jsx/css     # Подвал с навигацией
```

## Запуск локально

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера (http://localhost:5173)
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр продакшен-сборки (http://localhost:4173)
npm run preview
```

## Замена Spline-сцен

3D-сцены задаются URL-ами в компонентах:

- **Hero** — `src/components/Hero.jsx`, проп `scene` у компонента `<Spline>`
- **Портфолио** — `src/components/Works.jsx`, поле `scene` в массиве `projects`

Чтобы использовать свою сцену из Spline:

1. Откройте проект в [Spline](https://spline.design)
2. Нажмите **Export** → **Code (React)**
3. Скопируйте URL вида `https://prod.spline.design/.../scene.splinecode`
4. Вставьте URL в соответствующий компонент
