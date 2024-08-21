import React from 'react';

const Product = ({ product, onAdd, onRemove }) => {
  return (
    <div className='product'>
      <img src={product.image} alt="Product image" className="product-image" />
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <h4 className='product-price'>{product.price}{product.price_sign}</h4>
        
        {product.quantity && product.quantity > 0 ? (
          <div className="product-controls">
            <button className="product-control-button" onClick={() => onRemove(product.id)}>-</button>
            <span className="product-quantity">{product.quantity}</span>
            <button className="product-control-button" onClick={() => onAdd(product.id)}>+</button>
          </div>
        ) : (
          <button className="add-to-cart-button" onClick={() => onAdd(product.id)}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
