import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PriveatRoute from "../Routes/PriveatRoute";
import EstateDetails from "../Component/EstateDetails/EstateDetails";
import Addblogs from "../Pages/AddBlogs/Addblogs";
import MyBlogs from "../Pages/MyBlogs/MyBlogs";
import CategoryItems from "../Pages/CategoryItems/CategoryItems";
import UpdateData from "../Pages/UpdateData/UpdateData";
import AllItems from "../Pages/AllItems/AllItems";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        // errorElement: <ErrorPage/>,
        children : [
            {
                path: '',
                loader: ()=> fetch ('http://localhost:5000/blogs'),
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/items/:id',
                element: <UpdateData/>
            },
            {
                path: 'allItems',
                loader: ()=> fetch ('http://localhost:5000/blogs'),
                element: <AllItems/>
            },
            {
                path: '/CategoryItems/:categoryName',
                element: <PriveatRoute><CategoryItems/></PriveatRoute>
            },
            
            {
                path: '/addblogs',
                element: <PriveatRoute><Addblogs/></PriveatRoute>
            },
            {
                path: '/myblogs',
                element: <PriveatRoute><MyBlogs/></PriveatRoute>
            },
            {
                path: '/estate/:id',
                element: <PriveatRoute><EstateDetails/></PriveatRoute> ,
            },
        ]
    }
])

export default Router;