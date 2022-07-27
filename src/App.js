import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import styles from './App.css';
import Kids from './components/Category/Kids';
import Men from './components/Category/Men';
import Women from './components/Category/Women';
import Header from './components/Header/Header';
import ItemPage from './components/Category/ItemPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from './actions/items'
import GetId from './components/Category/ItemsParams';


class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <Header />
        <Routes>
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/women/:id" element={<GetId />} />
        </Routes>
      </div>
    )
  }
}


export default App

