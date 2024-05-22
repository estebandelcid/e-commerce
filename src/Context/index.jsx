import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
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
 const [items, setItems] = useState([])
 const [filteredItems, setFilteredItems] = useState(null)
 // Get products by title
 const [searchByTitle, setSearchByTitle] = useState('')
 // Get products by category
 const [searchItemsByCategory, setSearchItemsByCategory] = useState('');

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
        setItems(data.products);
      } catch (error) {
        console.error("Hubo un error: ", error);
      }
    };
    fetchData();
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  };
  const filteredItemsByCategory = (items, searchItemsByCategory) => {
    return items?.filter((item) => item.category.toLowerCase().includes(searchItemsByCategory.toLowerCase()))
  };
  const filterBy = (
    searchType,
    items,
    searchByTitle,
    searchItemsByCategory
  ) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchItemsByCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchItemsByCategory).filter(
        (item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };
  useEffect(() => {
    if (searchByTitle && searchItemsByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchItemsByCategory
        )
      );
    if (searchByTitle && !searchItemsByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchItemsByCategory)
      );
    if (!searchByTitle && searchItemsByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchItemsByCategory)
      );
    if (!searchByTitle && !searchItemsByCategory)
      setFilteredItems(
        filterBy(null, items, searchByTitle, searchItemsByCategory)
      );
  }, [items, searchByTitle, searchItemsByCategory]);
  return (
    <ShoppingCartContext.Provider
      value={{
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
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchItemsByCategory,
        setSearchItemsByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
