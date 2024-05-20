import { useContext } from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context"

export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] flex-col fixed right-0 border border-black/20 rounded-lg bg-white`}>
            <div className=" flex justify-between items-center p-6 ">
                <h2 className=" font-medium text-xl">Detail</h2>
                <button onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className="w-6 h-6 text-black"/>
                </button>
            </div>
            <div className=" overflow-y-auto">
            <figure className=" pb-6">
                <img className=" w-full h-full rounded-lg" 
                src={context.productToShow.images?.[0]} 
                alt={context.productToShow?.title} />
            </figure>
            <p className=" flex flex-col px-6 pb-6 ">
                <span className=" font-medium text-2xl">{`$${context.productToShow.price}`}</span>
                <span className=" font-medium text-base">{context.productToShow.title}</span>
                <span className=" font-light text-sm">{context.productToShow.description}</span>
            </p>
            </div>
           
        </aside>
    )
};
