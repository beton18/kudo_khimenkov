# Сайт-визитка секции кикбоксинга

Одностраничный сайт с минимальным функционалом на React + TypeScript + Vite.

## Быстрый старт

```bash
npm install
npm run dev
```
## Настройка

Все параметры в `src/config.ts`:
- Название секции
- Контакты (телефон, email, адрес)
- Ссылки на Telegram и WhatsApp
- Тренеры, расписание, цены
- Группы и направления

## Фотографии

Поместить фото в `assets/`:
- hero-bg.jpg - фон главного экрана
- about-photo.jpg - секция "О нас"
- group-kids.jpg, group-adults.jpg, group-pro.jpg - направления
- coach-1.jpg, coach-2.jpg, coach-3.jpg - тренеры

При отсутствии используется mock.jpg

## Сборка

```bash
npm run build
```

Результат в `dist/`

