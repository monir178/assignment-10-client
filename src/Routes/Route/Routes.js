import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Header from "../../Pages/Home/Header";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Categories from "../../Pages/Categories/Categories";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Checkout from "../../Pages/Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Header></Header>
            },
            {
                path: '/home',
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
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-10-server-seven-lime.vercel.app/courses')
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`https://assignment-10-server-seven-lime.vercel.app/categories/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://assignment-10-server-seven-lime.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-seven-lime.vercel.app/checkout/${params.id}`)

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