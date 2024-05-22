import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

export const Home = () => {
  const context = useContext(ShoppingCartContext);
  8

  return (
    <Layout>
      Home
      <div className=" w-full max-w-screen-lg grid grid-cols-4 gap-4">
      {context.items?.products.map((item) => (
        <Card key={item.id} data={item} />
      ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};
