import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state=initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
        var addedItem = state.find(c=>c.product.id === action.payload.product.id); //sepetteki ürün ile eklenen ürünün id si aynı olanları bulur
      if (addedItem) {
        let newState = state.map(cartItem => {//cartItem parametresini gezer
          if (cartItem.product.id === action.payload.id) {// gezilmiş cartItem daki ürün id si ile sepete yeni eklediğimiz ürün id karşılaştırılır
            return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 }) // object assign ile quantitiy si 1 artırılarak geri döndürülür
          }
          return cartItem; // .map ten gelen değeri geri döndürür
        })
        return newState; // quantity si yenilenmiş state i döndürür
      } else {
        return [...state, { ...action.payload }] // [state in kopyasını al]{actiondan gelen değeri state e ekle}
      }
    case actionTypes.REMOVE_FROM_CART:
        const newState2 = state.filter(cartItem => cartItem.product.id !== action.payload.id)
        return newState2
    default:
      return state;
  }
}

