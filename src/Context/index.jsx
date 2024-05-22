import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);
  // Product Detail - Open/ Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  // Checkout Side Menu - Open/ Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});
  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);
  // Shopping Cart - Order
  const [order, setOrder] = useState([]);
  // Get products
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
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
        items,
        setItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
