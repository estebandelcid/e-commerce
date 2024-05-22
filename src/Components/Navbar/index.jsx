import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className=" w-full flex justify-between items-center bg-white/60 backdrop-blur-lg fixed top-0 z-10 py-5 px-8 text-sm font-light">
            <ul className=" flex items-center gap-4">
                <li className=" font-semibold text-lg">
                    <NavLink to='/' >
                        Shop
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
                <li>
                    <NavLink 
                    to='/smartphones' 
                    className={({ isActive }) => isActive ? activeStyle : ''}
                    >
                        Smartphones
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/laptops' 
                    className={({ isActive }) => isActive ? activeStyle : ''}
                    >
                        Laptops
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/fragrances' 
                    className={({ isActive }) => isActive ? activeStyle : ''}
                    >
                        Fragrances
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/skincare' 
                    className={({ isActive }) => isActive ? activeStyle : ''}
                    >
                        Skincare
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/groceries' 
                    className={({ isActive }) => isActive ? activeStyle : ''}
                    >
                        Groceries
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/home-decoration' 
                    className={({ isActive }) => isActive ? activeStyle : ''}
                    >
                        Home Decoration
                    </NavLink>
                </li>
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
  