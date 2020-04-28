import * as actionTypes from "./actionTypes"
//seçili kategoriyi getirmek için
export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}
}
// kategorileri listelemek için
export function getCategoriesSuccess(categories){
    return {type:actionTypes.GET_CATEGORIES_SUCCES, payload:categories}
}
export function getCategories(categories){
    return function(dispatch){
        //debugger; // action ın gelip glmediğini kontrol eder
        let url = "http://localhost:3000/categories"
        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)))
        /*Her .then bir önceki .then in sonucunu döndürür yani
        ilk .then deki response değeri, 2. .then e result olarak geçer*/
    }
}