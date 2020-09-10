export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(action);
      let index = state.findIndex((product) => product.id === action.item.id);
      if (index === -1) {
        return [
          ...state,
          {
            id: action.item.id,
            name: action.item.name,
            qty: action.item.qty,
            price: action.item.price,
            img: action.item.img,
          },
        ];
      } else {
        console.log(state);
        let items = [...state];
        items[index].qty = items[index].qty + action.item.qty;
        console.log(items);
        return items;
      }
    case "REMOVE_ITEM":
      console.log(action.id);
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
