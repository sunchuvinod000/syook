export const initialState = {
  customers: { id: 123, name: "vinod", location: "anantapur" },
  items: [],
  vechicles: [],
  orders: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      state.items.push(action.items);
      return {
        ...state
      };
    case "ADD_VECHICLES":
      state.vechicles.push(action.vechicles);
      return {
        ...state
      };
    case "ADD_ORDER":
      state.orders.push(action.orders);

      return {
        ...state
      };

    default:
      return state;
  }
};

export default reducer;
