import React, { Component, PropTypes } from 'react';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    constructor(props) {
        super(props);
        this.state = {value: 0};
    
    
    this.handleChange = this.handleChange.bind(this);
}
    handleChange (event) {
        this.setState({value: event.target.value});
    }

    render() {
        const { name, price, currency, image, url, quantity, isInCart } = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>
                        <a href={url}>{name}</a>
                    </h3>
                    <form>
                         <div class="form-group">
                            <label for="quantity">Quantity:</label>
                            <input type="number" 
                                   value={this.state.value}
                                   onChange={this.handleChange}
                                   class="form-control"></input>
                         </div>
                    </form>     
                    <div className="product__price">{currency} {price} </div>

                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    quantity: PropTypes.number,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
