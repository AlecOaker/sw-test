import React from 'react';
import styles from './CartPreview.module.css'
import uniqBy from 'lodash/uniqBy'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../actions/cart'
import CartComponent from './CartComponent'


const CartPreview = ({ totalPrice, count, cartItems }) => {
    return (
        <div className={styles.container}>
            <div className={styles["item-cartItems"]}>
                <div className={styles['cart-name']}>
                    <span>My Bag, </span><span> items</span>
                </div>
                {cartItems.length > 0 ? cartItems.map(item => <CartComponent {...item} style={{padding: 0}} />) : <span className={styles.basket}>Тут порожньо :-( </span>}
                <div className={styles.totals}>
                    <span className={styles.total}>Total:</span>
                    <span className={styles['total-price']}>${totalPrice.toFixed(2)}</span>    
                </div>
            </div>
            <div className={styles.btns}>
                <button className={`${styles["btn-view"]} ${styles.btn}`}>View bag</button>
                <button className={`${styles["btn-check"]} ${styles.btn}`}>Check out</button>
            </div>
        </div>
    );
}


const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.cartItems.reduce((total, item) => total + Number(item.price), 0),
  count: cart.cartItems.length,
  cartItems: uniqBy(cart.cartItems, o => o.id)
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);
