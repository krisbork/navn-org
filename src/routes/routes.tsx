import Faq from "../pages/faq/FAQ";
import React from "react";
import Privatlivspolitik from "../pages/privatlivspolitik/Privatlivspolitik";
import Om from "../pages/om/Om";

export const routes = [
    {
        path: "/",
        element: <div>Hjem</div>,
    },
    {
        path: "/faq",
        element: <Faq />,
    },
    {
        path: "/privatlivspolitik",
        element: <Privatlivspolitik />,
    },
    {
        path: "/om",
        element: <Om />,
    },
]