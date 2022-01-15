const init = [];
export const Users = (state = init, action) => {
  switch (action.type) {
    case "GET__ALL":
      return (state = action.payload);
    case "ADD_USER":
      state = [...state, action.payload];
      return state;
    case "DELETE_USER":
      return {
        state: state.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
