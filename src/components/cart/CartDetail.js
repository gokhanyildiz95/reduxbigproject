import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import {Table , Button} from 'reactstrap'


class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product)
    }
    render() {
        return (
            <div>
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>productName</th>
                <th>unitPrice</th>
                <th>quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((cartItem) => (
                <tr>
                  <th key={cartItem.product.id} scope="row">{cartItem.product.id}</th>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.product.unitPrice}</td>
                  <td>{cartItem.quantity}</td>
                  <td><Button onClick={()=> this.removeFromCart(cartItem.product)} >sil</Button></td>
                </tr>
      ))}
            </tbody>
          </Table>
            </div>
        )
    }
}

function mapDispathToProps(dispatch){
    return{
        actions: {
            removeFromCart:bindActionCreators(cartActions.removeFromCart, dispatch),
        }
    }
    
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispathToProps)(CartDetail);
