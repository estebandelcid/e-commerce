import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className=" flex justify-between items-center p-6 ">
                <h2 className=" font-medium text-xl">Detail</h2>
                <button onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className="w-6 h-6 text-black"/>
                </button>
            </div>
        </aside>
    )
}