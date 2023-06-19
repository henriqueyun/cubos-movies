import {
    createBrowserRouter,
} from "react-router-dom";

import { Movie, Movies } from "./pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Movies />,
    },
    {
        path: '/movie/:id',
        element: <Movie />,
    },
]);

export default router;
