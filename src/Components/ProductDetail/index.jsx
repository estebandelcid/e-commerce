import { XMarkIcon } from "@heroicons/react/24/solid"

export const ProductDetail = () => {
    return(
        <aside className=" w-[360px] h-[calc(100vh-80px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white">
            <div className=" flex justify-between items-center p-6 ">
                <h2 className=" font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon className="w-6 h-6 text-black"/>
                </div>
            </div>
        </aside>
    )
}