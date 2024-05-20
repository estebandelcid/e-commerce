import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";

export const Home = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Hubo un error: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      Home
      <div className=" w-full max-w-screen-lg grid grid-cols-4 gap-4">
      {items?.products.map((item) => (
        <Card key={item.id} data={item} />
      ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};
