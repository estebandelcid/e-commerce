import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useFetchData } from "../../Hooks/useFetchData";

export const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const { data: categories } = useFetchData('https://dummyjson.com/products/categories');
    const limitedCategories = categories.slice(0, 4);
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className=" w-full flex justify-between items-center bg-white/60 backdrop-blur-lg fixed top-0 z-10 py-5 px-8 text-sm font-light">
            <ul className=" flex items-center gap-4">
                <li className=" font-semibold text-lg">
                    <NavLink to='/' >
                        Shop-e
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/' 
                    className={({ isActive }) => isActive ? activeStyle : ''}
                    >
                        All
                    </NavLink>
                </li>
                {
                    limitedCategories.map((category) => (
                        <li key={category.slug}>
                        <NavLink 
                        to={`/${category.slug}`}
                        className={({ isActive }) => isActive ? activeStyle : ''}
                        >
                            {category.name}
                        </NavLink>
                    </li>
                    ))
                }
            </ul>

            <ul className=" flex items-center gap-4">
                <li className=" text-black/60">
                    estebandelcid@gmail.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders' 
                    className={({ isActive }) => isActive ? activeStyle : ''}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account' 
                    className={({ isActive }) => isActive ? activeStyle : ''}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in' 
                    className={({ isActive }) => isActive ? activeStyle : ''}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <button className=" flex items-center"
                    onClick={() => context.setIsCheckoutSideMenuOpen(!context.isCheckoutSideMenuOpen)}
                    >
                    <ShoppingBagIcon className="w-6 h-6 text-black"/>
                    <span>{context.cartProducts.length}</span>
                    </button>
                    
                </li>
            </ul>
        </nav>
    );
  };
  