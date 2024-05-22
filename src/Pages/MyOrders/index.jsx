import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="w-80 flex justify-center items-center mb-4">
        <h1 className=" font-medium text-xl">My Orders</h1>
      </div>
      
      {context.order.map((order) => (
        <Link  key={order.id} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            date={order.date}
          />
        </Link>
      ))}
    </Layout>
  );
};
  