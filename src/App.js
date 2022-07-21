import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import ItemCard from './components/Category/ItemCard'
import styles from './App.css';
import Kids from './components/Category/Kids';
import Men from './components/Category/Men';
import Women from './components/Category/Women';
import Header from './components/Header/Header';
import * as itemsActions from './actions/items'

class App extends Component {
  componentWillMount() {
    const { setItems } = this.props
    axios.get('/items.json').then(({ data }) => {
      setItems(data)
    })
  }
  render() {
    const { items, isReady } = this.props
    return (
      <div className='app'>
        <Header />
        <Routes>
            <Route path="women" element={<Women />} />
            <Route path="men" element={<Men />} />
            <Route path="kids" element={<Kids />} />
        </Routes>
        <div className={styles.cards}>
          {!isReady
            ? "...Loading"
            : items.map((item, i) => (
              <ItemCard key={i} {...item} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ items}) => ({
  items: items.items,
  isReady: items.isReady
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

