import React, { PropTypes } from 'react';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Products</h2>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
