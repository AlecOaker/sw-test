import React from 'react';

const ItemCard = item => {
    const {title, category, price, image, id, stock, size, color, addToCart, addedCount} = item
        return (
            <div className="ui card">
                <div className="image">
                    <img src={image} alt='avatar'/>
                </div>
                <div className="content">
                    <span className="title">{title}</span>
                    <div className="meta">
                    <span className="price">{price}</span>
                    </div>
                </div>
                
            </div>
    );
}

export default ItemCard;
