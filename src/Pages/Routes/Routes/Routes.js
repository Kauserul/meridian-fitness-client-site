import { createBrowserRouter } from "react-router-dom";
import Blog from "../../../Blog/Blog";
import Main from "../../../layout/Main";
import AddService from "../../AddService/AddService";
import AllFood from "../../AllFood/AllFood";
import Home from "../../Home/Home/Home";
import Services from "../../Home/Services/Services";
import LogIn from "../../LogIn/LogIn";
import MyReview from "../../MyReview/MyReview";
import Register from "../../Register/Register";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/services',
                element : <Services></Services>
            },
            {
                path : '/services/:id',
                element : <ServiceDetails></ServiceDetails>,
                loader : ({params}) => fetch(`https://meridian-fitness-server.vercel.app/services/${params.id}`)
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/myReview',
                element : <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path : '/addService',
                element : <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path : 'allFood',
                element : <AllFood></AllFood>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            }
        ]
    }
])