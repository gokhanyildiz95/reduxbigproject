import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";


class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = category => {
      this.props.actions.changeCategory(category);
      this.props.actions.getProducts(category.id)
  }
  render() {
    return (
      <div>
      <h3>Categort List</h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem active={category.id===this.props.currentCategory.id?true:false} onClick={()=> this.selectCategory(category)} key={category.id}>
              {category.categoryName}
            </ListGroupItem>
            
          ))}
        </ListGroup>
        <h3>{this.props.categories.length}</h3>
        <h3>secili kategori : {this.props.currentCategory.categoryName} </h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //categoryactions dan bağlantı sağlar.
      getCategories: bindActionCreators(categoryActions.getCategories,dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory,dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),

    },
  };
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
