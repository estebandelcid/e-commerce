import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import './App.css'
import { Navbar } from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element: <Home/>},
    {path:'/smartphones', element: <Home/>},
    {path:'/laptops', element: <Home/>},
    {path:'/fragrances', element: <Home/>},
    {path:'/skincare', element: <Home/>},
    {path:'/groceries', element: <Home/>},
    {path:'/home-decoration', element: <Home/>},
    {path:'/my-account', element: <MyAccount/>},
    {path:'/my-order', element: <MyOrder/>},
    {path:'/my-orders/last', element: <MyOrder/>},
    {path:'/my-orders/:id', element: <MyOrder/>},
    {path:'/my-orders', element: <MyOrders/>},
    {path:'/sign-in', element: <SignIn/>},
    {path:'*', element: <NotFound/>},
  ])
  return routes
}

export const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};
