import React, { Component } from "react";
import { connect } from "react-redux";
import { } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import { Table ,Badge, Button  } from "reactstrap";
import * as cartActions from "../../redux/actions/cartActions";


class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
addToCart = (product) => {
    this.props.actions.addToCart({quantity:1,product})
}
  render() {
      console.log(this.props.cartItem)
    return (
      <div>
        <h3>
          Productlist <Badge>{this.props.currentCategory.categoryName}</Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr>
                <th key={product.id} scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=> this.addToCart(product)} >ekle</Button></td>
              </tr>
    ))}
          </tbody>
        </Table>

        <h1>{this.props.products.length}</h1>
        <h3>{this.props.cartItem.length}</h3>
        

      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //productactions dan bağlantı sağlar.
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart,dispatch)
    },
  };
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
    cartItem: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
