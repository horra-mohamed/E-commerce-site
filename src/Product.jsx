import React from 'react';

function Product({ product, addToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Ajouter au panier
            </button>
        </div>
    );
}

export default Product;
