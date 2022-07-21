import React, { Component } from 'react';
import styles from './ActionCurr.module.css'

class ActionCurr extends Component {
    constructor() {
        super()
        this.state = {
            currency: '$'
        }

    }

    changeCurrency = (event) => {
        this.setState((curState) => {
            return {
                currency: event.target.value
            }
        })
    }


    render() {
        return (
            <div className={styles.selector} style={{ width: 80 }}>
                {/* <div value={this.state.currency} onChange={this.changeCurrency.bind(this)}>
                    <p hidden>{this.state.currency}</p>
                    <div>
                        <span value='$'>$ USD</span>
                        <span value='€'>€ EUR</span>
                        <span value='¥'>¥ JPY</span>
                    </div>
                </div> */}

                <select value={this.state.currency} onChange={this.changeCurrency.bind(this)}>
                    <option hidden>{this.state.currency}</option>
                    <option value='$'>$ USD</option>
                    <option value='€'>€ EUR</option>
                    <option value='¥'>¥ JPY</option>
                </select> 
            </div>
        );
    }
}

export default ActionCurr;
