import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { CriarAvaliacao } from "../pages/CriarAvaliacao";

export const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/avaliacao",
        element: <CriarAvaliacao />,
    },
]);
