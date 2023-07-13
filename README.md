Приложение для поиска фотографий в базе Nasa: [https://leafy-liger-e242c7.netlify.app/](https://poplyq-nasa.netlify.app/)

Реализованы следующие требования к функциональности:

1 уровень (необходимый минимум)

React

Функциональные компоненты с хуками в приоритете над классовыми

Есть  разделение на умные и глупые компоненты

Есть рендеринг списков [FavoritesPage](https://github.com/poplyq/nasa/blob/main/src/pages/Favoritepage/FavoritesPage.tsx)

Реализована хотя бы одна форма LoginComponent

Есть применение Контекст AuthApi

Есть применение предохранителя ErrorBoundary

Есть хотя бы один кастомный хук useRelogin, useLogout, useDebounce

Хотя бы несколько компонентов используют PropTypes PasswordInput, EmailInput

Поиск не должен триггерить много запросов к серверу

Есть применение lazy + Suspense Routing

Redux

Используется Modern Redux with Redux Toolkit store

Используется слайсы favoritesSlice historySlice userSlice

Есть хотя бы одна кастомная мидлвара logger

Используется RTK Query cardsApi

Используется Transforming Responses searchApi

2 уровень (необязательный)

Используeтся TypeScript

Используется Firebase для учетных записей пользователей и их Избранного и Истории поиска 

Настроен CI/CD. Ниже в тексте подробнее про это. Пункт я засчитаю как сделанный, только если вы реализуете в самом начале разработки. Делать его в конце проекта - бессмысленно. CI/CD должны работать со старта CI, CD
