import React, { Component } from 'react';
import cart from '../../icons/empty-cart.png'
import styles from './ActionCart.module.css'
import CartPreview from './CartPreview';

class ActionCart extends Component {
    render() {
        return (
            <div>
                <button className={styles["cart-button"]} to="/cart">
                    <div className={styles.dropdown}>
                    <img src={cart} alt="Logo" />
                        <div className={styles["dropdown-content"]}>
                        <CartPreview/>
                        </div>
                    </div>
                </button>
            </div>
        );
    }
}

export default ActionCart;
