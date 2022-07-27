import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../../actions/items'
import styles from './ItemPage.module.css'

class ItemPage extends Component {
    render() {
        const { id, title, image, price, size } = this.props.items[this.props.taskId]

        
        const sizes = Object.keys(size)
        const colors = Object.values(size)
        console.log(colors);
        let total = 0
        for (let i = 0; i < colors.length; i++) {
            const element = colors[i];
        }

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
                                    <span className={styles["size-specs"]}>{item}</span>
                                    )
                                )}
                            </div>
                        </div>
                        <div>
                            <span className={styles.name}>Color:</span>
                            <div className={styles.sizes}>
                                {sizes.map(item =>(
                                    <span className={styles["size-specs"]}>{item}</span>
                                    )
                                )}
                            </div>
                        </div>
                        <div className={styles.price}></div>
                        <div className={styles['add-cart-button']}></div>
                        <div className={styles.description}></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ items}) => ({
  items: items.items
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
