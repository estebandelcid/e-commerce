import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

export const Card = (props) => {
    const context = useContext(ShoppingCartContext);
    const showProduct = (productDetail) => {
      context.openProductDetail()
      context.setProductToShow(productDetail)
    }
    const handleImageError = (event) => {
      event.target.src =
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png";
      event.target.alt = "Not Found";
    };
    return (
      <div className=" w-56 h-60 bg-white cursor-pointer rounded-lg border border-black/20"
      onClick={() => showProduct(props.data)}
      >
        <figure className=" w-full h-4/5 relative mb-2 ">
          <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
            {props.data.category.name}
          </span>
          <img
            className=" w-full h-full object-cover rounded-lg"
            src={props.data.images[0]}
            alt={props.data.title}
            onError={handleImageError}
          />
          <button className=" w-6 h-6 absolute top-0 right-0 bg-white rounded-full flex justify-center items-center m-2 p-1"
          onClick={(event) => {
            event.stopPropagation()
            context.setCount(context.count + 1)
          }}
          >
            <PlusIcon className="w-6 h-6 text-black" />
          </button>
        </figure>
        <p className="flex justify-between">
          <span className=" text-sm font-light ml-3">{props.data.title}</span>
          <span className=" text-lg font-medium mr-3">{`$${props.data.price}`}</span>
        </p>
      </div>
    );
}