import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import AddService from "../../AddService/AddService";
import Home from "../../Home/Home/Home";
import Services from "../../Home/Services/Services";
import LogIn from "../../LogIn/LogIn";
import MyReview from "../../MyReview/MyReview";
import Register from "../../Register/Register";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";


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
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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
                element : <MyReview></MyReview>
            },
            {
                path : '/addService',
                element : <AddService></AddService>
            },
            
            
        ]
    }
])