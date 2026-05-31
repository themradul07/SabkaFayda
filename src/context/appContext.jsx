import { createContext, useContext, useState } from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addItem = (product) => {         
    setCart((prev) => [...prev, product]);
  };

  const removeItem = (id) => {    
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        setCartOpen,
        cartOpen,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useData = ()=>{
    if(!AppContext) throw new ("Failed to Acces the Context");
    return useContext(AppContext);
}