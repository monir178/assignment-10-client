import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Header from "../../Pages/Home/Header";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Blog from "../../Pages/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Header></Header>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])