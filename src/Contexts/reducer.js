export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce(
    (previousVal, elem) => previousVal + elem.price * elem.quantity,
    0
  );

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.some((item) => item.id === action.item.id)) {
        const tempCart = state.cart.map((item) => {
          if (item.id === action.item.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, cart: tempCart };
      }
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((elem) => elem.id !== action.item.id)],
      };
    case "CHANGE_ITEM_QTY":
      const tempCart = state.cart.map((item) => {
        if (item.id === action.item.id) {
          return { ...item, quantity: action.item.quantity };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      break;
  }
};
