import { useContext } from "react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { handleImageError } from "../../Utils/imageUtils";

const RenderIcon = ({ isInCart, onItemAdded }) => {
  if (isInCart) {
    return (
      <span className=" w-6 h-6 absolute top-0 right-0 bg-black/60 rounded-full flex justify-center items-center m-2 p-1 cursor-default">
        <CheckIcon className="w-6 h-6 text-white" />
      </span>
    );
  } else {
    return (
      <button
        className=" w-6 h-6 absolute top-0 right-0 bg-white rounded-full flex justify-center items-center m-2 p-1"
        onClick={onItemAdded}
      >
        <PlusIcon className="w-6 h-6 text-black" />
      </button>
    );
  }
};
export const Card = (props) => {
    const context = useContext(ShoppingCartContext);
    const showProduct = (productDetail) => {
      context.openProductDetail();
      context.setProductToShow(productDetail);
    }
    const addProductsToCart = (event, productData) => {
      event.stopPropagation();
      context.setCount(context.count + 1);
      context.setCartProducts((cartProducts) => [...cartProducts, productData]);
      context.openCheckoutSideMenu();
      context.closeProductDetail();
    };
    const isInCart = context.cartProducts.some((product) => product.id === props.data.id);

    return (
      <div className=" w-56 h-60 bg-white cursor-pointer rounded-lg border border-black/20"
      onClick={() => showProduct(props.data)}
      >
        <figure className=" w-full h-4/5 relative mb-2 ">
          <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
            {props.data.category}
          </span>
          <img
            className=" w-full h-full object-cover rounded-lg"
            src={props.data.images[0]}
            alt={props.data.title}
            onError={handleImageError}
          />
          {/* <button className=" w-6 h-6 absolute top-0 right-0 bg-white rounded-full flex justify-center items-center m-2 p-1"
          onClick={(event) => addProductsToCart(event, props.data)}
          >
            <PlusIcon className="w-6 h-6 text-black" />
          </button> */}
          <RenderIcon 
          isInCart={isInCart}
          onItemAdded={(event) => addProductsToCart(event, props.data)}
          />
        </figure>
        <p className="flex justify-between">
          <span className=" text-sm font-light ml-3 truncate">{props.data.title}</span>
          <span className=" text-lg font-medium mr-3">{`$${props.data.price}`}</span>
        </p>
      </div>
    );
};
