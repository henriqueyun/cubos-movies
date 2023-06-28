import {
    createBrowserRouter,
} from "react-router-dom";

import { MoviePage, Movies } from "./pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Movies />,
    },
    {
        path: '/movie/:id',
        element: <MoviePage />,
    },
]);

export default router;
