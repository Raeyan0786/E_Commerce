import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem:[],
    totalAmount:0,
    totalQuantity:0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      addItem:(state,action)=>
      {
          const newItem=action.payload;
          const existingitem=state.cartItem.find((item)=> item.id===newItem.id);

          state.totalQuantity++;

          if(!existingitem)
          {
              state.cartItem.push({
                  id:newItem.id,
                  productName:newItem.productName,
                  imgUrl:newItem.imgUrl,
                  price:newItem.price,
                  quantity:1,
                  totalPrice:newItem.price
              })
          }
          else
          {
              existingitem.quantity++;
              existingitem.totalPrice=Number(existingitem.totalPrice)+Number(newItem.price)
          }
          state.totalAmount=state.cartItem.reduce((total,item)=> total+Number(item.price)*Number(item.quantity),0)

          //console.log(state.totalQuantity)
          //console.log(state.cartItem)
          //console.log(newItem)
        },
        deleteItem:(state,action)=>
        {
            const id=action.payload
            const existingitem=state.cartItem.find((item)=> item.id===id)
            if(existingitem)
            {
                state.cartItem=state.cartItem.filter((item)=> item.id!==id)
                state.totalQuantity=state.totalQuantity-existingitem.quantity
            }
            state.totalAmount=state.cartItem.reduce((total,item)=> total+Number(item.price)*Number(item.quantity),0)
        }
  }
  
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer