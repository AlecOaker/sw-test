import React, { Component } from 'react';
import styles from './Women.module.css'


class Women extends Component {
    render() {
        return (
            <div>
                <div className={styles.cats} id={this.id}>
                    {/* {womenData.map((option, index) => 
                        <div className={styles.cat} key={index} value={option.id}>{option.name}>
                            <img src="option.img" alt={option.img}/>
                        </div> */}
                    )}
                </div>
            </div>
        );
    }
}

export default Women;
