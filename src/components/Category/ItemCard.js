import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from "./ItemCard.module.css"
import * as cartActions from '../../actions/cart'
import { Link } from 'react-router-dom';

const ItemCard = item => {
    const { title, price, image, id, size} = item
    

    const sizeType = Object.values(size)

    const stockSum = (sizeType) => {
        let total = 0
        for (let i = 0; i < sizeType.length; i++) {
            const element = Object.values(sizeType[i]).reduce((a, b) => Number(a) + Number(b), 0)
            total += element
        }
        return total
    }
    // reduce((a, b) => Number(a) + Number(b), 0)
        return (
            <div className={styles.card}>
                <Link to={`/women/${id}`}>
                    <div className={stockSum(sizeType) > 0 ? styles.image : styles.stockless}>
                        {stockSum(sizeType) < 1 ? <span className={styles.out}>Out of stock</span> : null}
                        <img src={image} alt='avatar'/>
                    </div>
                </Link>
                <div className={styles.content}>
                    <span className="title">{title}</span>
                    <div className="meta">
                    <span className="price">${price}</span>
                    </div>
                </div>
                
            </div>
    );
}

const mapStateToProps = ({ cart }, {id}) => ({
  addedCount: cart.cartItems.reduce(
      (count, item) => count + (item.id === id ? 1 : 0), 
      0,
  )
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
