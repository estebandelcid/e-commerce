import { CalendarDaysIcon, ChevronRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

export const OrdersCard = (props) => {
    const { totalPrice, totalProducts, date } = props;
  return (
    <div className="w-80 flex justify-between items-center mb-4 p-4 border border-black rounded-lg">
     <div className=" w-full flex justify-between">
      <p className="flex flex-col">
          
        <span className="flex gap-1 font-light">
          <CalendarDaysIcon className="w-6 h-6 text-black"/>
          {date}
        </span>
        <span className="flex gap-1 font-light">
          <ShoppingBagIcon className="w-6 h-6 text-black" />
          {`${totalProducts} articles`}
        </span>
      </p>
      <p className=" flex items-center gap-2">
        <span className=" font-medium text-2xl">{`$${totalPrice}`}</span>
        <span>
          <ChevronRightIcon className="w-6 h-6 text-black"/>
        </span>
      </p>
     </div>
    </div>
  );
};
