import React from 'react'
import styles from './CartComponent.module.css'


const colorFunc = (colors) => {
            for (let i = 0; i < colors.length; i++) {
                const element = colors[i]
                return element
            };
        }

const CartComponent = ({ title, id, image, removeFromCart, size, price }) =>
(
    <div className={styles.container}>
        <div className={styles.about}>
            <div className={styles["title-brand"]}>{ title.split(' ')[0] }</div>
            <div className={styles["title-model"]}>{ title.slice(title.indexOf(" ")) }</div>
            <div className={styles.size}>
            <div className={styles.prices}>
                <span className={styles.price}>${price}</span>
            </div>
                <span className={styles.name}>Size:</span>
                <div className={styles.sizes}>
                    {Object.keys(size).map(item =>(
                        <span className={styles["size-specs"]}>{item}</span>
                        )
                    )}
                </div>
            </div>
            <div>
                <span className={styles.name}>Color:</span>
                <div className={styles.colors}>
                    {Object.keys(colorFunc(Object.values(size))).map(item =>(
                        <div className={styles["color-specs"]} style={{backgroundColor: `${item}`}}></div>
                        )
                    )}
                </div>
            </div>
        </div>
        <div className={styles.counter}>
            <div className={styles.sign}>+</div>
            <div className={styles.quantity}>1</div>
            <div className={styles.sign}>-</div>
        </div>
        <div>
            <img className={styles.image} src={image} alt={id} />
        </div>
    </div>

)
export default CartComponent