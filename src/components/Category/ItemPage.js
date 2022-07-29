import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../../actions/items'
import * as cartActions from '../../actions/cart'
import styles from './ItemPage.module.css'

class ItemPage extends Component {
    render() {
        console.log(this.props);
        const cartItem = this.props.items.items[this.props.taskId]
        const { id, title, image, price, size, description } = cartItem
        const addToCart = this.props.addToCart
    
        const sizes = Object.keys(size)
        const colorsArr = Object.values(size)
        const colorFunc = (colors) => {
            for (let i = 0; i < colors.length; i++) {
                const element = colors[i]
                return element
            };
        }
        const colors = Object.keys(colorFunc(colorsArr));

        return (
            <div className={styles.container}>
                <div className={styles.imgs} >
                    <img className={styles["small-image"]} src={image} alt={`pic-${id}`}/>
                    <img className={styles["small-image"]} src={image} alt={`pic-${id}`}/>
                    <img className={styles["small-image"]} src={image} alt={`pic-${id}`}/>
                </div>
                <div className={styles.product}>
                    <img className={styles["main-image"]} src={image} alt={`pic-${id}`}/>
                    <div className={styles.about}>
                        <div className={styles["title-brand"]}>{ title.split(' ')[0] }</div>
                        <div className={styles["title-model"]}>{ title.slice(title.indexOf(" ")) }</div>
                        <div className={styles.size}>
                            <span className={styles.name}>Size:</span>
                            <div className={styles.sizes}>
                                {sizes.map(item =>(
                                    <span key={id + Math.random()} className={styles["size-specs"]}>{item}</span>
                                    )
                                )}
                            </div>
                        </div>
                        <div>
                            <span className={styles.name}>Color:</span>
                            <div className={styles.colors}>
                                {colors.map(item =>(
                                    <div key={id + Math.random()} className={styles["color-specs"]} style={{backgroundColor: `${item}`}}></div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className={styles.prices}>
                            <span className={styles.name}>Price:</span>
                            <span className={styles.price}>${price}</span>
                        </div>
                        <div className={styles['add-cart-buttons']}>
                            <button className={styles['add-cart-button']} onClick={addToCart.bind(this, cartItem)} >ADD TO CART</button>
                        </div>
                        <div className={styles.description}>
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ items}, {taskId}) => ({
    items: items
//     addedCount: cart.cartItems.reduce(
//       (count, item) => count + item, 
//       0,
//   )
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(itemsActions, dispatch),
    ...bindActionCreators(cartActions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
