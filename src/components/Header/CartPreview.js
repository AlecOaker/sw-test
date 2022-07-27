import React from 'react';
import styles from './CartPreview.module.css'
import uniqBy from 'lodash/uniqBy'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../actions/cart'

const CartComponent = ({ title, id, image, removeFromCart }) => (
    <div style={{display: "flex"}}>
        <div style={{marginLeft: 10}}>
        <img
            width={45}
            height={55}
            alt="171x180"
            src={image}
        />
        </div>
        <span className={styles.title}>{title}</span>
        <button variant="danger" onClick={removeFromCart.bind(this, id)} style={{height:40, width: "auto", marginLeft: 10, marginRight: 10}}>Видалити</button>
    </div>
)
      
const CartPreview = ({ totalPrice, count, cartItems }) => {
    return (
        <div className={styles.container}>
            <div className={styles["item-cartItems"]}>
                <span>My Bag, </span><span> items</span>
                {cartItems.length > 0 ? cartItems.map(item => <CartComponent {...item} style={{padding: 0}} />) : <span className={styles.basket}>Тут порожньо :-( </span>}
                <span>Total: <b>${totalPrice}</b></span>
            </div>
            <div className={styles.btns}>
                <button className={`${styles["btn-view"]} ${styles.btn}`}>View bag</button>
                <button className={`${styles["btn-check"]} ${styles.btn}`}>Check out</button>
            </div>
        </div>
    );
}


const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.cartItems.reduce((total, item) => total + item.price, 0),
  count: cart.cartItems.length,
  cartItems: uniqBy(cart.cartItems, o => o.id)
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);
