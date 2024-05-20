import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../OrderCard";

export const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
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
        <div className="px-6">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
        </div>
       
      </aside>
    );
};
