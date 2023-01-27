import { ADD_TO_CART } from "../actionTypes/actionTypes"

export const add_to_cart = (product)=>{
   return{
    type : ADD_TO_CART,
    payload : product,
   }
}