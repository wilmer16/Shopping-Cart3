import React, { PropTypes } from 'react';

const CartItem = ({ name, price, currency, quantity }) => {
    return (
        <div className="cart-item">
          <span className="cart-item__name">{name}</span>
          <span className="cart-item__price"> {currency} {price} Quantity:{quantity}</span>		
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    quantity:PropTypes.number.isRequired
}

export default CartItem;
