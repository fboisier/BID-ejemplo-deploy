import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Create from '../pages/Create'
import Votar from '../pages/Votar'
import Home from '../pages/Home'
import Success from '../pages/Success'

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
        index: true,
        element: <Home />
    },
    {
        path: "new",
        element: <Create />
    },
    {
        path: "polls/:id",
        element: <Votar />
    },
    {
        path: "success/:id",
        element: <Success />
    }
    ]
}])