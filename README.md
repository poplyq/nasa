Приложение для поиска фотографий в базе [NASA](https://poplyq-nasa.netlify.app/)

Реализованы следующие требования к функциональности:

1 уровень (необходимый минимум)

React

Функциональные компоненты с хуками в приоритете над классовыми

Есть  разделение на умные и глупые компоненты

Есть рендеринг списков [FavoritesPage](https://github.com/poplyq/nasa/blob/main/src/pages/Favoritepage/FavoritesPage.tsx)

Реализована хотя бы одна форма [LoginComponent](https://github.com/poplyq/nasa/blob/main/src/components/loginpage/LoginComponent.tsx)

Есть применение Контекст [AuthApi](https://github.com/poplyq/nasa/blob/main/src/helpers/context/index.ts)

Есть применение предохранителя [ErrorBoundary](https://github.com/poplyq/nasa/blob/main/src/helpers/callbacks/PodBoundary.tsx)

Есть хотя бы один кастомный хук [useRelogin](https://github.com/poplyq/nasa/blob/main/src/helpers/hooks/useRelogin.ts), [useLogout](https://github.com/poplyq/nasa/blob/main/src/helpers/hooks/useLogout.ts), [useDebounce](https://github.com/poplyq/nasa/blob/main/src/modules/searchmodule/useDebounce.ts)

Хотя бы несколько компонентов используют PropTypes [PasswordInput](https://github.com/poplyq/nasa/blob/main/src/components/common/inputs/EmailInput.tsx), [EmailInput](https://github.com/poplyq/nasa/blob/main/src/components/common/inputs/PasswordInput.tsx)

Поиск не должен триггерить много запросов к серверу [useDebounce](https://github.com/poplyq/nasa/blob/main/src/modules/searchmodule/useDebounce.ts)

Есть применение [lazy](https://github.com/poplyq/nasa/blob/main/src/routing/routes.ts) + [Suspense Routing](https://github.com/poplyq/nasa/blob/main/src/App.tsx)

Redux

Используется Modern Redux with Redux Toolkit [store](https://github.com/poplyq/nasa/blob/main/src/store/store.ts)

Используется [слайсы](https://github.com/poplyq/nasa/tree/main/src/store/slices) favoritesSlice historySlice userSlice

Есть хотя бы одна кастомная мидлвара [logger](https://github.com/poplyq/nasa/blob/main/src/store/middleware/logger.ts)

Используется RTK Query [searchApi](https://github.com/poplyq/nasa/blob/main/src/store/api/searchApi/searchApi.ts)

Используется Transforming Responses [searchApi](https://github.com/poplyq/nasa/blob/main/src/store/api/searchApi/searchApi.ts)

2 уровень (необязательный)

Используeтся TypeScript

Используется [Firebase](https://github.com/poplyq/nasa/blob/main/src/firebase.ts) для учетных записей [пользователей](https://github.com/poplyq/nasa/blob/main/src/components/loginpage/LoginComponent.tsx) и их [Избранного](https://github.com/poplyq/nasa/blob/main/src/store/actions/getFavorites.ts) и [Истории поиска](https://github.com/poplyq/nasa/blob/main/src/store/actions/getHistory.ts) 

Настроен [CI](https://github.com/poplyq/nasa/blob/main/.github/workflows/github-actions-demo.yml)/[CD](https://poplyq-nasa.netlify.app/)
