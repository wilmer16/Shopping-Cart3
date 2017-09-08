import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import './App.css'

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <h1>My Shopping Cart</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <ProductList />
                </div>
                <div className="col-md-5">
                    <Cart />
                </div>
            </div> 
        </div>
   );
}

export default App;
