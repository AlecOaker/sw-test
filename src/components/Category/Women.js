import React, { Component } from 'react';
import ItemCard from './ItemCard'
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../../actions/items'
import styles from './Women.module.css'


class Women extends Component {
    componentDidMount() {
    const { setItems } = this.props
    axios.get('/items.json').then(({ data }) => {
      setItems(data)
    })
  }
  render() {
      
      const { items, isReady } = this.props
        return (
            <div>
                <span className={styles.name}>Category name</span>
                <div className={styles.cards}>
                    {!isReady
                        ? "...Loading"
                        : items.map((item, i) => (
                          <ItemCard key={i} {...item}/>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ items}) => ({
  items: items.items,
  isReady: items.isReady
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Women);

