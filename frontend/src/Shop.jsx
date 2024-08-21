import React, { useEffect, useState } from 'react';
import Product from "./Product";

const Shop = ({ products, onAdd, cartProducts, onRemove }) => {
  const [visibleProducts, setVisibleProducts] = useState(16);
  const [searchedProducts, setSearchedProducts] = useState(products);

  useEffect(() => {
    if (products) {
      setSearchedProducts(products);
    }
  }, [products]);

  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 16);
  };

  const searchProducts = (rec) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(rec.toLowerCase())
    );
    setSearchedProducts(filteredProducts);
    setVisibleProducts(16);
  };

  return (
    <div className='shop'>
      <input className='search-bar'
        type="text"
        placeholder="Search products by name"
        onChange={(e) => searchProducts(e.target.value)}
      />
      <div className='products'>
        {searchedProducts && searchedProducts.length > 0 ? (
          <>
            {searchedProducts.slice(0, visibleProducts).map((p) => {
              const productInCart = cartProducts.find(cp => cp.id === p.id);
              const productWithQuantity = productInCart ? { ...p, quantity: productInCart.quantity } : p;
              return (
                <Product
                  product={productWithQuantity}
                  key={p.id}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              );
            })}
            {visibleProducts < searchedProducts.length ? (
              <button onClick={showMoreProducts}>Show more products</button>
            ) : ""}
          </>
        ) : 
        <div className='noProducts'>
          <h1 className='noProductsInCart'>No products</h1>
        </div>}
      </div>
    </div>
  );
}

export default Shop;
