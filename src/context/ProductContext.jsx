// ProductContext.js
import React, { createContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  return React.useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          'http://ecommerce.muersolutions.com/api/v1/products'
        );
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.log('Failed to fetch data:', res.status, res.statusText);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
