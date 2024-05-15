import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

export const Home = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
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
      {items?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </Layout>
  );
};
