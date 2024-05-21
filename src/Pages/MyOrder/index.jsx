import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard"
import { Layout } from "../../Components/Layout";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const {id} = useParams();
  let orderToShow =
    id === undefined
      ? context.order?.slice(-1)[0]
      : context.order?.filter((order) => order.id === id)[0];

    return (
      <Layout>
        <div className="w-80 relative flex justify-center items-center mb-6">
          <Link to={"/my-orders"} className="absolute left-0">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Link>
          <h1>My Orders</h1>
        </div>
        <div className=" w-80 flex flex-col">
          {orderToShow?.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images?.[0]}
              price={product.price}
            />
          ))}
        </div>
      </Layout>
    );
  };
  