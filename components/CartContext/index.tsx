import { createContext, ReactNode, useState, useContext } from 'react';

interface CartContextData {
  products: number[];
  setProducts: (products: number[]) => void;
}

const CartContext = createContext<CartContextData>({
  products: [],
  setProducts: () => {},
});

interface CartContextProviderProps {
  children: ReactNode;
}

const getProductsFromLocalStorage = () => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
};

const useProductsLocalStorage = () => {
  const [products, setProducts] = useState<number[]>(
    getProductsFromLocalStorage
  );
  console.log(products);

  const setProductsToLocalStorage = (products: number[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(products));
    }
    setProducts(products);
  };

  return [products, setProductsToLocalStorage] as const;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [products, setProducts] = useProductsLocalStorage();

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
