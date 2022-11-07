import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Services from "../../Home/Services/Services";
import Main from "../../layout/Main";
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
            }
        ]
    }
])