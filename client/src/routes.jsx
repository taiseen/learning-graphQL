import {
    Login,
    Profile,
    AllQuotes,
    CreateQuote,
    Registration,
    PageNotFound,
} from './components';

export const routes = [
    { path: "/", element: <AllQuotes /> },
    { path: "/login", element: <Login /> },
    { path: "/profile", element: <Profile /> },
    { path: "/crateQuote", element: <CreateQuote /> },
    { path: "/registration", element: <Registration /> },
    { path: "*", element: <PageNotFound /> }
]