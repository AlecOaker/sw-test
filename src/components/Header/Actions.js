import React, { Component } from 'react';
import ActionCart from './ActionCart';
import ActionCurr from './ActionCurr';
import styles from './Actions.module.css'

class Actions extends Component {
    render() {
        return (
            <div className={styles['action-buttons']}>
                <ActionCurr />               
                <ActionCart />                
            </div>
        );
    }
}

export default Actions;
