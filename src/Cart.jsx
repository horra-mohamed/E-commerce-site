import React from 'react';

function Cart({ cartItems }) {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Cart;
