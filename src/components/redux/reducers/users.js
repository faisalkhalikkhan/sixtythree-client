const init = [];
export const Users = (state = init, action) => {
  switch (action.type) {
    case "GET__ALL":
      return (state = action.payload);
    case "ADD_USER":
      state = [...state, action.payload];
      return state;
    case "DELETE_USER":
      state = state.filter((item) => item._id !== action.payload);
      return state;
    default:
      return state;
  }
};
