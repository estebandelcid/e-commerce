import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard"

import { Layout } from "../../Components/Layout";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);

    return (
    <Layout>
      My Order
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
    )
  };
  