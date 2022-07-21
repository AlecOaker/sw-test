import React, { Component } from 'react';
import cart from '../../pic/empty-cart.png'
import { Link, Outlet } from 'react-router-dom';

class ActionCart extends Component {
    render() {
        return (
            <div>
                <Link to="/cart">
                    <img src={cart} alt="Logo"/>
                </Link>
            </div>
        );
    }
}

export default ActionCart;
