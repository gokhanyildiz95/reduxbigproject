import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  
  render() {
    return (
      <div>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem active={category.id===this.props.currentCategory.id?true:false} onClick={()=> this.props.actions.changeCategory(category)} key={category.id}>
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
      //categoryaction dan bağlantı sağlar.
      getCategories: bindActionCreators(categoryActions.getCategories,dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory,dispatch)
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
