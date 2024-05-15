export const Card = () => {
    return (
        <div className=" w-56 h-60 bg-white cursor-pointer rounded-lg border border-black/20">
            <figure className=" w-full h-4/5 relative mb-2 ">
                <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
                <img
                className=" w-full h-full object-cover rounded-lg"
                src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="headphones" />
                <button className=" w-6 h-6 absolute top-0 right-0 bg-white rounded-full flex justify-center items-center m-2 p-1">﹢</button>
            </figure>
            <p className="flex justify-between">
                <span className=" text-sm font-light ml-3">Headphones</span>
                <span className=" text-lg font-medium mr-3">$300</span>
            </p>
        </div>
    )
}