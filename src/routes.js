import Home from "./pages/Home"
import Admins from "./pages/Admins"
import LoginForm from "./components/LoginForm/LoginForm"
// import Allproducts from "./components/AllProducts/Allproducts"
import Shopingcard from "./components/Shoping_card/Shopingcard"
import ProductsInfo from "./components/AllProducts/ProductsInfo"
import Header from "./components/Home/Header/Header"
import { Link } from "react-router-dom"





let routes = [
    {path: "/" , element: <Home/>},
    {path: "/admins" , element:<Admins/>},
    {path: "/h" , element:<Header/>},
    {path: "/loginform" , element: <LoginForm/>},
    {path: "/ProductsInfo" , element: <ProductsInfo/>},
    {path: "/shopingcard" , element: <Shopingcard/>},
    
]


export default routes
