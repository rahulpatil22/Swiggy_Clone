import { createSlice ,current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //name of the slice:cart with initialState named as items[]
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //action with mapped reducer function ,reducer fn modify action  using access to state:initialState(items:[]) and action
    // reducer fn():addItem will modify the state based on action

    // {
    //comes here as second arg, action from addbutton- restaurantItemList
  //when it will dispatch action , it will go with this in reducer action.payload
//   payload:"pizza"/"item"
// }
    addItem: (state, action) => {
      //mutating(modifying) the state over here
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    //originalState={items:["pizza"]}
    clearCart: (state, action) => {
      // console.log(state);//[pizza]
      // console.log(current(state));
      // state = [];//it just modified local varaible empty,make the state empty , not originalState-pizza remain the same
      // console.log(state);// state is empty , store(cart value-2) did not change

      //RTK-either mutate the existing state or return a new state
      // state.items.length = 0; //originalState=["empty"]
      return {items:[]};//just send empty obj, it will replace whatever there in originalState=[]
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
