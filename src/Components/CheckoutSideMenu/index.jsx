import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../Utils/totalPrice";
import { Link } from "react-router-dom";

export const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const handleDelete = (id) => {
      const filterProducts = context.cartProducts.filter((product) => product.id != id);
      context.setCartProducts(filterProducts);
    };
    const handleCheckout = () => {
      const orderToAdd = {
        date: "01.02.24",
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts),
      };
      context.setOrder((order) => [...order, orderToAdd]);
      context.setCartProducts([]);
      context.closeCheckoutSideMenu();
    };
    return (
      <aside
        className={`${
          context.isCheckoutSideMenuOpen ? "flex" : "hidden"
        } w-[360px] h-[calc(100vh-68px)] flex-col fixed top-[68px] right-0 border border-black/20 rounded-lg bg-white`}
      >
        <div className=" flex justify-between items-center p-6 ">
          <h2 className=" font-medium text-xl">My Order</h2>
          <button onClick={() => context.closeCheckoutSideMenu()}>
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
        </div>
        <div className="px-6 mb-6">
          <p className="flex justify-between items-center mb-2"> 
            <span className=" font-light">Total Price:</span>
            <span className=" font-medium text-2xl">{`$${totalPrice(context.cartProducts)}`}</span>
          </p>
          <Link to="/my-orders/last">
          <button 
          className="w-full bg-black text-white py-3 rounded-lg" 
          onClick={() => handleCheckout()}>
            Checkout
          </button>
          </Link>
         
        </div>
       
      </aside>
    );
};
