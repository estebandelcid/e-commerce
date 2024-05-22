import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

export const Home = () => {
  const context = useContext(ShoppingCartContext);
  const { category } = useParams();
  useEffect(() => {
    if (category != context.searchItemsByCategory) {
      context.setSearchItemsByCategory(category);
    }
  }, [
    category,
    context.searchItemsByCategory,
    context.setSearchItemsByCategory,
  ]);
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>We don´t have anything </div>;
    }
  };
  return (
    <Layout>
      <div className="w-80 flex justify-center items-center mb-4">
        <h1 className=" font-medium text-xl">Exclusive Products</h1>
      </div>
      <input 
      className=" rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
      type="text" 
      placeholder="Search product"
      value={context.searchByTitle}
      onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className=" w-full max-w-screen-lg grid grid-cols-4 gap-4">
      {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};
