import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../actions/cart'
import items from '../../reducers/items';

class ItemPageTest extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Hello!
            </div>
        );
    }
}

const mapStateToProps = ({ items }) => ({
    items: items
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapDispatchToProps, mapStateToProps)(ItemPageTest);
