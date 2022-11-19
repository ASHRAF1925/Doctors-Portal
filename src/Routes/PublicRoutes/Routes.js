import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main/Main"
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import Signup from "../../SignUp/Signup"
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes"


export const router=createBrowserRouter([
    {
        path:'/',
       element:<Main></Main>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/appoinment',
            element:<Appoinment></Appoinment>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        }
       ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    },

])