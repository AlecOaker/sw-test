import React, { Component } from 'react';
import styles from './Header.module.css'
import logo from'../../icons/a-logo.png'
import Actions from './Actions';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../actions/cart'
import uniqBy from 'lodash/uniqBy'

class Header extends Component {

    constructor() {
        super()
        this.state = {
            womenActive: false,
            menActive: false,
            kidsActive: false
        }
    }

    womenActiveHandler = () => {
            this.setState({ womenActive: true });
            this.setState({menActive: false})
            this.setState({kidsActive: false})
        }
    menActiveHandler = () => {
        this.setState({ menActive: true });
        this.setState({womenActive: false})
        this.setState({kidsActive: false})
    }
    kidsActiveHandler = () => {
        this.setState({ kidsActive: true });
        this.setState({menActive: false})
        this.setState({womenActive: false})
    }

    render() {
        return (
            <div className={styles.container}>
                <nav className={styles.tabs}>
                    <Link className= {this.state.womenActive ? styles.active : styles.category} to="/women" onClick={this.womenActiveHandler.bind(this)}>Women</Link> {" "}
                    <Link className={this.state.menActive ? styles.active : styles.category} to="/men" onClick={this.menActiveHandler.bind(this)}>Men</Link> {" "}
                    <Link className={this.state.kidsActive ? styles.active : styles.category} to="/kids" onClick={this.kidsActiveHandler.bind(this)}>Kids</Link>
                </nav>
                <Outlet />
                <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
                <Actions />
            </div>
        );
    }
}

export default Header
