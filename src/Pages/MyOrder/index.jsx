import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard"
import { Layout } from "../../Components/Layout";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);

    return (
      <Layout>
        <div className="w-80 relative flex justify-center items-center mb-6">
          <Link to={"/my-orders"} className="absolute left-0">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Link>
          <h1>My Orders</h1>
        </div>
        <div className=" w-80 flex flex-col">
          {context.order?.slice(-1)[0].products.map((product) => (
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
  